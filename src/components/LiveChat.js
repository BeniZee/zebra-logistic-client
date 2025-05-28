import React, { useState, useEffect, useRef } from 'react';
import {
  Box,
  Paper,
  Typography,
  TextField,
  IconButton,
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  Avatar,
  CircularProgress,
} from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import ChatIcon from '@mui/icons-material/Chat';
import CloseIcon from '@mui/icons-material/Close';
import SmartToyIcon from '@mui/icons-material/SmartToy';
import PersonIcon from '@mui/icons-material/Person';
import './LiveChat.css';

const LiveChat = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [error, setError] = useState(null);
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  const getChatGPTResponse = async (message) => {
    try {
      const response = await fetch('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${process.env.REACT_APP_OPENAI_API_KEY}`
        },
        body: JSON.stringify({
          model: "gpt-3.5-turbo",
          messages: [
            {
              role: "system",
              content: "You are a helpful logistics assistant for Zebra Logistic. Provide detailed, accurate, and professional responses about shipping, tracking, rates, claims, and other logistics services. Always maintain a friendly and professional tone."
            },
            {
              role: "user",
              content: message
            }
          ],
          temperature: 0.7,
          max_tokens: 500
        })
      });

      const data = await response.json();
      
      if (data.error) {
        throw new Error(data.error.message);
      }

      return data.choices[0].message.content;
    } catch (error) {
      console.error('Error calling ChatGPT:', error);
      return getFallbackResponse(message);
    }
  };

  const getFallbackResponse = (message) => {
    const lowerMessage = message.toLowerCase();
    
    // Predefined responses with more specific answers
    const responses = {
      greeting: "Hello! I'm your Zebra Logistic assistant. I can help you with:\n• Tracking shipments\n• Getting quotes\n• Scheduling pickups\n• Filing claims\n• Checking service availability\nWhat would you like to know?",
      
      hours: "Our customer service hours are:\n• Monday-Friday: 9:00 AM - 6:00 PM\n• Saturday: 10:00 AM - 4:00 PM\n• Sunday: Closed\nFor urgent matters, call our 24/7 emergency line at (555) 123-4567.",
      
      tracking: "To track your shipment:\n1. Visit our tracking page\n2. Enter your tracking number\n3. View real-time updates\n\nDon't have your tracking number? I can help you locate it using your order number or email address.",
      
      rates: "Our shipping rates are based on:\n• Distance\n• Weight\n• Service type\n• Delivery speed\n\nWould you like a quote? Just provide:\n• Origin and destination\n• Package dimensions\n• Weight\n• Delivery timeline",
      
      claims: "For claims assistance:\n1. Visit our claims page\n2. Fill out the claim form\n3. Upload required documents\n\nOr call our claims department at (555) 987-6543\nHours: Monday-Friday, 9 AM - 5 PM",
      
      service: "We offer these services:\n• Local Delivery (Same day)\n• Long-haul Transportation\n• Cross-country Shipping\n• Dedicated Routes\n• Warehousing\n• Temperature-controlled Shipping\n• Express Delivery\n\nWhich service interests you?",
      
      payment: "We accept:\n• Credit Cards (Visa, MasterCard, Amex)\n• Bank Transfers\n• PayPal\n• Business Accounts (Net 30)\n\nNeed to set up a business account? I can guide you through the process.",
      
      insurance: "Our insurance options:\n• Basic Coverage (included)\n• Enhanced Coverage\n• Full Value Protection\n\nBasic coverage includes:\n• Up to $100 per package\n• Damage protection\n• Loss protection\n\nWould you like to know more about our enhanced coverage options?",
      
      emergency: "For emergencies:\n• Call: (555) 123-4567 (24/7)\n• Email: emergency@zebralogistics.com\n• Text: (555) 987-6543\n\nOur emergency team is available 24/7 to assist with:\n• Delayed shipments\n• Damaged packages\n• Lost shipments\n• Urgent deliveries",
      
      location: "Our main office is located at:\n123 Logistics Way\nSan Francisco, CA 94105\n\nWe also have regional offices in:\n• Los Angeles\n• New York\n• Chicago\n• Miami\n\nWould you like directions to any of our locations?",
      
      pickup: "To schedule a pickup:\n1. Call (555) 123-4567\n2. Use our online booking system\n3. Request through our mobile app\n\nPickup hours:\n• Monday-Friday: 8 AM - 6 PM\n• Saturday: 9 AM - 3 PM",
      
      delivery: "Our delivery options:\n• Standard (3-5 business days)\n• Express (1-2 business days)\n• Same-day (local only)\n• Weekend delivery\n• Time-specific delivery\n\nWhich option would you like to know more about?",
      
      default: "I can help you with:\n• Tracking shipments\n• Getting quotes\n• Scheduling pickups\n• Filing claims\n• Checking service availability\n• Payment options\n• Insurance coverage\n\nPlease let me know what specific information you need!"
    };

    // Check for keywords in the message with more specific matching
    if (lowerMessage.includes('hello') || lowerMessage.includes('hi') || lowerMessage.includes('hey')) {
      return responses.greeting;
    } else if (lowerMessage.includes('hour') || lowerMessage.includes('time') || lowerMessage.includes('when') || lowerMessage.includes('schedule')) {
      return responses.hours;
    } else if (lowerMessage.includes('track') || lowerMessage.includes('where') || lowerMessage.includes('location') || lowerMessage.includes('find')) {
      return responses.tracking;
    } else if (lowerMessage.includes('rate') || lowerMessage.includes('price') || lowerMessage.includes('cost') || lowerMessage.includes('quote')) {
      return responses.rates;
    } else if (lowerMessage.includes('claim') || lowerMessage.includes('damage') || lowerMessage.includes('issue') || lowerMessage.includes('problem')) {
      return responses.claims;
    } else if (lowerMessage.includes('service') || lowerMessage.includes('offer') || lowerMessage.includes('provide') || lowerMessage.includes('delivery')) {
      return responses.service;
    } else if (lowerMessage.includes('pay') || lowerMessage.includes('payment') || lowerMessage.includes('money') || lowerMessage.includes('invoice')) {
      return responses.payment;
    } else if (lowerMessage.includes('insurance') || lowerMessage.includes('coverage') || lowerMessage.includes('protect') || lowerMessage.includes('secure')) {
      return responses.insurance;
    } else if (lowerMessage.includes('emergency') || lowerMessage.includes('urgent') || lowerMessage.includes('immediate') || lowerMessage.includes('asap')) {
      return responses.emergency;
    } else if (lowerMessage.includes('office') || lowerMessage.includes('address') || lowerMessage.includes('location') || lowerMessage.includes('where')) {
      return responses.location;
    } else if (lowerMessage.includes('pickup') || lowerMessage.includes('collect') || lowerMessage.includes('gather')) {
      return responses.pickup;
    } else if (lowerMessage.includes('deliver') || lowerMessage.includes('ship') || lowerMessage.includes('send')) {
      return responses.delivery;
    } else {
      return responses.default;
    }
  };

  const handleSendMessage = async () => {
    if (!newMessage.trim()) return;

    try {
      setError(null);
      setIsTyping(true);

      // Add user message
      const userMessage = {
        text: newMessage,
        sender: 'user',
        timestamp: new Date().toISOString(),
      };
      
      setMessages(prev => [...prev, userMessage]);
      setNewMessage('');

      // Get response from ChatGPT
      const aiResponse = {
        text: await getChatGPTResponse(userMessage.text),
        sender: 'ai',
        timestamp: new Date().toISOString(),
      };
      
      setMessages(prev => [...prev, aiResponse]);
    } catch (error) {
      console.error('Error in chat:', error);
      setError('Sorry, something went wrong. Please try again or call our support team at (555) 123-4567.');
    } finally {
      setIsTyping(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const handleClose = () => {
    setIsOpen(false);
    setMessages([]);
    setNewMessage('');
    setIsTyping(false);
    setError(null);
  };

  return (
    <div className="live-chat">
      {!isOpen && (
        <button className="chat-button" onClick={() => setIsOpen(true)}>
          <ChatIcon />
          Chat with us
        </button>
      )}

      {isOpen && (
        <div className="chat-window">
          <div className="chat-header">
            <h3>Chat with us</h3>
            <button className="close-button" onClick={handleClose}>
              <CloseIcon />
            </button>
          </div>

          <div className="chat-messages">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`message ${message.sender}`}
              >
                {message.text}
              </div>
            ))}
            {isTyping && (
              <div className="message ai typing">
                <CircularProgress size={20} />
                <span>Thinking</span>
              </div>
            )}
            {error && (
              <div className="message error">
                {error}
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          <div className="chat-input">
            <input
              ref={inputRef}
              type="text"
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Type your message..."
              disabled={isTyping}
            />
            <button 
              onClick={handleSendMessage}
              disabled={isTyping || !newMessage.trim()}
              className={isTyping ? 'sending' : ''}
            >
              {isTyping ? <CircularProgress size={24} /> : <SendIcon />}
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default LiveChat; 