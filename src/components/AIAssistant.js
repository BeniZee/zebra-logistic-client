import React, { useState, useRef, useEffect } from 'react';
import {
  Box,
  Paper,
  TextField,
  IconButton,
  Typography,
  List,
  ListItem,
  ListItemText,
  Collapse,
  Button,
  Drawer,
  Fab,
  Tooltip,
  Badge,
} from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import ChatIcon from '@mui/icons-material/Chat';
import CloseIcon from '@mui/icons-material/Close';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import MicIcon from '@mui/icons-material/Mic';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import './AIAssistant.css';

const AIAssistant = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [showQuickQuestions, setShowQuickQuestions] = useState(true);
  const [isRecording, setIsRecording] = useState(false);
  const [unreadMessages, setUnreadMessages] = useState(0);
  const messagesEndRef = useRef(null);
  const fileInputRef = useRef(null);

  const quickQuestions = [
    {
      question: "What services do you offer?",
      answer: "We offer a comprehensive range of logistics services including:\n• Local Delivery\n• Long Haul Transportation\n• Cross Country Shipping\n• Dedicated Routes\n• Warehousing Solutions"
    },
    {
      question: "How can I track my shipment?",
      answer: "You can track your shipment in several ways:\n1. Use our online tracking system\n2. Call our customer service\n3. Use our mobile app\n4. Contact your dedicated logistics coordinator"
    },
    {
      question: "What are your business hours?",
      answer: "Our main office is open Monday-Friday, 8:00 AM - 6:00 PM EST. However, our operations run 24/7, and our customer service team is available around the clock for urgent matters."
    },
    {
      question: "How do I become a driver?",
      answer: "To become a driver with Zebra Logistic:\n1. Visit our Careers page\n2. Click on 'Professional Truck Driver' position\n3. Fill out the application form\n4. Submit required documents\n5. Our team will review your application"
    },
    {
      question: "What are your safety standards?",
      answer: "We maintain the highest safety standards:\n• Regular vehicle maintenance\n• Driver safety training\n• GPS tracking\n• Real-time monitoring\n• Compliance with DOT regulations"
    },
    {
      question: "How do I get a quote?",
      answer: "To get a quote:\n1. Visit our Services page\n2. Select your service type\n3. Fill out the quote form\n4. Our team will contact you within 24 hours\nOr call us directly at 1-800-ZEBRA-LOG"
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept various payment methods:\n• Credit/Debit Cards\n• Bank Transfers\n• PayPal\n• Company Credit\n• Net 30 terms for approved businesses"
    },
    {
      question: "Do you offer insurance?",
      answer: "Yes, we provide comprehensive insurance coverage:\n• Cargo insurance\n• Liability insurance\n• Vehicle insurance\n• Driver insurance\nContact our insurance department for specific coverage details."
    },
    {
      question: "What is your company's experience?",
      answer: "Zebra Logistic has over 6 years of experience in the transportation and logistics industry. We've successfully handled thousands of shipments and built a reputation for reliability and excellence in service delivery."
    },
    {
      question: "How large is your fleet?",
      answer: "We maintain a fleet of over 10 vehicles, including:\n• Box trucks\n• Semi-trucks\n• Refrigerated vehicles\n• Specialized equipment\nOur diverse fleet allows us to handle various types of shipments and delivery requirements."
    }
  ];

  const handleSend = () => {
    if (input.trim()) {
      const userMessage = {
        type: 'user',
        content: input,
        timestamp: new Date().toLocaleTimeString()
      };

      setMessages(prev => [...prev, userMessage]);

      // Simulate AI response
      setTimeout(() => {
        const aiResponse = generateResponse(input);
        const aiMessage = {
          type: 'ai',
          content: aiResponse,
          timestamp: new Date().toLocaleTimeString()
        };
        setMessages(prev => [...prev, aiMessage]);
      }, 1000);

      setInput('');
    }
  };

  const generateResponse = (userInput) => {
    const lowerInput = userInput.toLowerCase();
    
    // Enhanced keyword recognition
    if (lowerInput.includes('track') || lowerInput.includes('tracking') || lowerInput.includes('where is my')) {
      return "You can track your shipment through our online tracking system, mobile app, or by contacting our customer service team at 1-800-ZEBRA-LOG.";
    }
    
    if (lowerInput.includes('price') || lowerInput.includes('cost') || lowerInput.includes('quote') || lowerInput.includes('how much')) {
      return "For accurate pricing information, please contact our sales team at sales@zebralogistics.com or call 1-800-ZEBRA-LOG. We'll provide you with a customized quote based on your specific needs.";
    }
    
    if (lowerInput.includes('delivery time') || lowerInput.includes('how long') || lowerInput.includes('when will') || lowerInput.includes('eta')) {
      return "Delivery times vary based on the service type and distance. Local deliveries typically take 1-2 days, while cross-country shipments may take 3-5 business days. For specific timing, please contact our customer service.";
    }
    
    if (lowerInput.includes('contact') || lowerInput.includes('phone') || lowerInput.includes('email') || lowerInput.includes('reach')) {
      return "You can reach us through:\n• Phone: 1-800-ZEBRA-LOG\n• Email: info@zebralogistics.com\n• Live Chat: Available 24/7 on our website\n• Office: 1400 W Patapsco Ave, Baltimore, MD 21230";
    }

    if (lowerInput.includes('safety') || lowerInput.includes('secure') || lowerInput.includes('protected')) {
      return "We maintain strict safety protocols:\n• GPS tracking on all vehicles\n• Regular driver training\n• Vehicle maintenance schedules\n• Real-time monitoring\n• Insurance coverage for all shipments";
    }

    if (lowerInput.includes('insurance') || lowerInput.includes('coverage') || lowerInput.includes('claim')) {
      return "We offer comprehensive insurance coverage:\n• Cargo insurance up to $100,000\n• General liability coverage\n• Vehicle insurance\n• Driver insurance\nContact our insurance department for specific coverage details.";
    }

    if (lowerInput.includes('payment') || lowerInput.includes('pay') || lowerInput.includes('billing')) {
      return "We accept various payment methods:\n• Credit/Debit Cards\n• Bank Transfers\n• PayPal\n• Company Credit\n• Net 30 terms for approved businesses";
    }

    if (lowerInput.includes('complaint') || lowerInput.includes('issue') || lowerInput.includes('problem')) {
      return "We're sorry to hear about your issue. Please contact our customer service team at support@zebralogistics.com or call 1-800-ZEBRA-LOG. We'll address your concern immediately.";
    }

    if (lowerInput.includes('experience') || lowerInput.includes('years') || lowerInput.includes('how long')) {
      return "Zebra Logistic has over 6 years of experience in the transportation and logistics industry. Our team has successfully handled thousands of shipments, building a strong reputation for reliability and excellence in service delivery.";
    }

    if (lowerInput.includes('fleet') || lowerInput.includes('vehicles') || lowerInput.includes('trucks')) {
      return "We maintain a fleet of over 10 vehicles, including:\n• Box trucks\n• Semi-trucks\n• Refrigerated vehicles\n• Specialized equipment\nOur diverse fleet allows us to handle various types of shipments and delivery requirements efficiently.";
    }

    // Default response for unrecognized queries
    return "I'm here to help! Could you please provide more details about your question? You can also try our quick questions below or contact our customer service team for immediate assistance.";
  };

  const handleQuickQuestion = (question, answer) => {
    const userMessage = {
      type: 'user',
      content: question,
      timestamp: new Date().toLocaleTimeString()
    };

    const aiMessage = {
      type: 'ai',
      content: answer,
      timestamp: new Date().toLocaleTimeString()
    };

    setMessages(prev => [...prev, userMessage, aiMessage]);
  };

  const handleVoiceInput = () => {
    if (!isRecording) {
      // Start recording
      setIsRecording(true);
      // Implement voice recognition logic here
    } else {
      // Stop recording
      setIsRecording(false);
      // Process voice input
    }
  };

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const userMessage = {
        type: 'user',
        content: `Uploaded file: ${file.name}`,
        timestamp: new Date().toLocaleTimeString()
      };
      setMessages(prev => [...prev, userMessage]);
      
      // Simulate AI response for file
      setTimeout(() => {
        const aiMessage = {
          type: 'ai',
          content: "I've received your file. How can I help you with it?",
          timestamp: new Date().toLocaleTimeString()
        };
        setMessages(prev => [...prev, aiMessage]);
      }, 1000);
    }
  };

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    if (!isOpen && messages.length > 0) {
      setUnreadMessages(prev => prev + 1);
    } else {
      setUnreadMessages(0);
    }
  }, [messages, isOpen]);

  return (
    <>
      <Tooltip title="AI Assistant">
        <Fab
          color="primary"
          className="chat-fab"
          onClick={() => setIsOpen(true)}
        >
          <Badge badgeContent={unreadMessages} color="error">
            <ChatIcon />
          </Badge>
        </Fab>
      </Tooltip>

      <Drawer
        anchor="right"
        open={isOpen}
        onClose={() => setIsOpen(false)}
        className="ai-assistant-drawer"
      >
        <Box className="ai-assistant-container">
          <Box className="ai-assistant-header">
            <Typography variant="h6">AI Assistant</Typography>
            <IconButton onClick={() => setIsOpen(false)}>
              <CloseIcon />
            </IconButton>
          </Box>

          <Box className="quick-questions">
            <Box 
              className="quick-questions-header"
              onClick={() => setShowQuickQuestions(!showQuickQuestions)}
            >
              <Typography variant="subtitle1">Quick Questions</Typography>
              {showQuickQuestions ? <ExpandLessIcon /> : <ExpandMoreIcon />}
            </Box>
            <Collapse in={showQuickQuestions}>
              <List>
                {quickQuestions.map((item, index) => (
                  <ListItem 
                    key={index}
                    button
                    onClick={() => handleQuickQuestion(item.question, item.answer)}
                    className="quick-question-item"
                  >
                    <ListItemText primary={item.question} />
                  </ListItem>
                ))}
              </List>
            </Collapse>
          </Box>

          <Box className="messages-container">
            {messages.map((message, index) => (
              <Box
                key={index}
                className={`message ${message.type === 'user' ? 'user-message' : 'ai-message'}`}
              >
                <Typography variant="body1">{message.content}</Typography>
                <Typography variant="caption" className="message-timestamp">
                  {message.timestamp}
                </Typography>
              </Box>
            ))}
            <div ref={messagesEndRef} />
          </Box>

          <Box className="input-container">
            <input
              type="file"
              ref={fileInputRef}
              style={{ display: 'none' }}
              onChange={handleFileUpload}
            />
            <IconButton 
              color="primary"
              onClick={() => fileInputRef.current.click()}
              className="attach-button"
            >
              <AttachFileIcon />
            </IconButton>
            <IconButton 
              color={isRecording ? "error" : "primary"}
              onClick={handleVoiceInput}
              className="voice-button"
            >
              <MicIcon />
            </IconButton>
            <TextField
              fullWidth
              variant="outlined"
              placeholder="Type your question..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSend()}
              className="message-input"
            />
            <IconButton 
              color="primary" 
              onClick={handleSend}
              className="send-button"
            >
              <SendIcon />
            </IconButton>
          </Box>
        </Box>
      </Drawer>
    </>
  );
};

export default AIAssistant; 