// import React, { useState, useRef, useEffect } from 'react';
// import { MessageCircle, X, Send, ShoppingBag, ArrowRight, Sparkles } from 'lucide-react';
// import botLogo from '../assets/bot.png'
// import { apiPost } from '../hooks/erpnextApi';
// import { GoogleGenAI } from "@google/genai";


// const EcommerceChatbot = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [isTyping, setIsTyping] = useState(false);
//   const [input, setInput] = useState('');
//   const messagesEndRef = useRef(null);

//   const ai = new GoogleGenAI({});

//   const sendMessage = async() => {
    
//     try {
        

//         const chat = ai.chats.create({
//             model: "gemini-2.5-flash",
//             history: [
//                 {
//                     role: "user",
//                     parts: [{ text: "Hello" }],
//                 },
//                 {
//                     role: "model",
//                     parts: [{ text: "Great to meet you. What would you like to know?" }],
//                 },
//             ],
//             config: {
//                 systemInstruction: "You are a cat. Your name is Neko."
//             }
//         });

//     } catch (error) {
        
//     }
//   }

//   useEffect(() => {
//     sendMessage()
//   }, [])
  

//   // Mock Initial State
//   const [messages, setMessages] = useState([
//     { 
//       id: 1, 
//       type: 'bot', 
//       content: "Hi there! I'm your AI shopping assistant. Looking for anything specific today?" 
//     }
//   ]);

//   // Auto-scroll to bottom
//   useEffect(() => {
//     messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
//   }, [messages, isOpen]);

//   const handleSend = async () => {
//     sendMessage()
//     if (!input.trim()) return;

//     // 1. Add User Message
//     const userMsg = { id: Date.now(), type: 'user', content: input };
//     setMessages(prev => [...prev, userMsg]);
//     setInput('');
//     setIsTyping(true);

//     // 2. Simulate AI Delay & Response (Replace with your API logic)
//     setTimeout(() => {
//       setIsTyping(false);
      
//       // MOCK: If user asks about "sneakers", show a product card
//       if (input.toLowerCase().includes('sneaker') || input.toLowerCase().includes('shoe')) {
//         setMessages(prev => [...prev, {
//           id: Date.now() + 1,
//           type: 'bot',
//           content: "I found these top-rated sneakers that match your vibe:",
//           product: {
//             name: "Urban Drift X1",
//             price: "$129.00",
//             image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=300&q=80"
//           }
//         }]);
//       } else {
//         setMessages(prev => [...prev, {
//           id: Date.now() + 1,
//           type: 'bot',
//           content: "I can help with that! Could you give me a few more details so I can narrow down the search?"
//         }]);
//       }
//     }, 1500);
//   };

//   return (
//     <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end space-y-4 font-sans">
      
//       {/* --- Chat Window --- */}
//       {/* Uses absolute positioning and opacity for a smooth 'pop' effect */}
//       <div 
//         className={`
//           transition-all duration-300 ease-in-out transform origin-bottom-right
//           ${isOpen ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-95 translate-y-4 pointer-events-none'}
//           w-[380px] h-[600px] bg-white/90 backdrop-blur-xl border border-white/20 shadow-2xl rounded-3xl overflow-hidden flex flex-col
//         `}
//       >
//         {/* Header */}
//         <div className="bg-linear-to-r from-violet-600 to-indigo-600 p-4 flex items-center justify-between shrink-0">
//           <div className="flex items-center gap-3">
//             <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center backdrop-blur-sm">
//               {/* <Sparkles className="w-5 h-5 text-white" /> */}
//               <img src={botLogo} className='rounded-full' alt="" />
//             </div>
//             <div>
//               <h3 className="text-white font-semibold text-sm">Ecomm Assistant</h3>
//               <p className="text-indigo-100 text-xs flex items-center gap-1">
//                 <span className="w-2 h-2 bg-green-400 rounded-full "></span>
//                 Online
//               </p>
//             </div>
//           </div>
//           <button 
//             onClick={() => setIsOpen(false)}
//             className="text-white/80 hover:text-white hover:bg-white/10 p-2 rounded-full transition-colors"
//           >
//             <X className="w-5 h-5" />
//           </button>
//         </div>

//         {/* Messages Area */}
//         <div className="flex-1 overflow-y-auto p-4 space-y-6 bg-slate-50">
//           {messages.map((msg) => (
//             <div 
//               key={msg.id} 
//               className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}
//             >
//               <div 
//                 className={`
//                   max-w-[85%] rounded-2xl p-3.5 text-sm leading-relaxed shadow-sm
//                   ${msg.type === 'user' 
//                     ? 'bg-indigo-600 text-white rounded-br-none' 
//                     : 'bg-white text-slate-700 border border-slate-100 rounded-bl-none'}
//                 `}
//               >
//                 {msg.content}
                
//                 {/* Embedded Product Card Logic */}
//                 {msg.product && (
//                   <div className="mt-3 bg-slate-50 border border-slate-100 rounded-xl overflow-hidden shadow-sm group cursor-pointer hover:shadow-md transition-all">
//                     <div className="h-32 overflow-hidden">
//                       <img 
//                         src={msg.product.image} 
//                         alt={msg.product.name} 
//                         className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
//                       />
//                     </div>
//                     <div className="p-3">
//                       <div className="flex justify-between items-start mb-1">
//                         <h4 className="font-semibold text-slate-800">{msg.product.name}</h4>
//                         <span className="text-indigo-600 font-bold bg-indigo-50 px-2 py-0.5 rounded text-xs">
//                           {msg.product.price}
//                         </span>
//                       </div>
//                       <button className="w-full mt-2 bg-slate-900 text-white text-xs py-2 rounded-lg flex items-center justify-center gap-2 hover:bg-slate-800 transition-colors">
//                         View Details <ArrowRight className="w-3 h-3" />
//                       </button>
//                     </div>
//                   </div>
//                 )}
//               </div>
//             </div>
//           ))}

//           {/* Typing Indicator */}
//           {isTyping && (
//             <div className="flex justify-start">
//               <div className="bg-white border border-slate-100 rounded-2xl rounded-bl-none p-4 shadow-sm flex items-center gap-1">
//                 <span className="w-2 h-2 bg-indigo-400 rounded-full animate-bounce"></span>
//                 <span className="w-2 h-2 bg-indigo-400 rounded-full animate-bounce [animation-delay:0.2s]"></span>
//                 <span className="w-2 h-2 bg-indigo-400 rounded-full animate-bounce [animation-delay:0.4s]"></span>
//               </div>
//             </div>
//           )}
//           <div ref={messagesEndRef} />
//         </div>

//         {/* Input Area */}
//         <div className="p-4 bg-white border-t border-slate-100">
//           {/* Quick Suggestions (Optional) */}
        //   <div className="flex gap-2 overflow-x-auto pb-3 mb-1 no-scrollbar">
        //     {['Track Order', 'Return Policy', 'Best Sellers'].map((chip) => (
        //       <button 
        //         key={chip}
        //         onClick={() => setInput(chip)}
        //         className="whitespace-nowrap px-3 py-1.5 bg-slate-100 hover:bg-slate-200 text-slate-600 text-xs rounded-full transition-colors border border-slate-200"
        //       >
        //         {chip}
        //       </button>
        //     ))}
        //   </div>

//           <div className="relative flex items-center">
//             <input
//               type="text"
//               value={input}
//               onChange={(e) => setInput(e.target.value)}
//               onKeyDown={(e) => e.key === 'Enter' && handleSend()}
//               placeholder="Ask about products..."
//               className="w-full bg-slate-100 text-slate-800 text-sm rounded-xl pl-4 pr-12 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 transition-all placeholder:text-slate-400"
//             />
//             <button 
//               onClick={handleSend}
//               disabled={!input.trim()}
//               className="absolute right-2 p-2 bg-black text-white rounded-lg  disabled:opacity-50 disabled:cursor-not-allowed transition-all shadow-md shadow-indigo-200"
//             >
//               <Send className="w-4 h-4" />
//             </button>
//           </div>
//           <div className="text-center mt-2">
//             <span className="text-[10px] text-slate-400">Powered by Gemini AI</span>
//           </div>
//         </div>
//       </div>

//       {/* --- Toggle Button (The "Floater") --- */}
//       <button
//         onClick={() => setIsOpen(!isOpen)}
//         className={`
//           relative w-14 h-14 rounded-full shadow-2xl flex items-center justify-center transition-all duration-300 hover:scale-110
//           ${isOpen ? 'bg-white text-indigo-600 rotate-90' : 'bg-indigo-600 text-white rotate-0'}
//         `}
//       >
//         {isOpen ? <X className="w-6 h-6" /> : <MessageCircle className="w-6 h-6" />}
        
//         {/* Notification Badge */}
//         {!isOpen && (
//           <span className="absolute top-0 right-0 w-4 h-4 bg-red-500 rounded-full border-2 border-white"></span>
//         )}
//       </button>
//     </div>
//   );
// };

// export default EcommerceChatbot;










import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, ArrowRight } from 'lucide-react';
import { GoogleGenAI } from "@google/genai";
import botLogo from '../assets/bot.png'; 


 

const EcommerceChatbot = ({item_code, item_name, item_group, description}) => {
    
  const [isOpen, setIsOpen] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const [input, setInput] = useState('');
  const [suggestedQuestions, setSuggestedQuestions] = useState([])
  

  const chatRef = useRef(null);
  const messagesEndRef = useRef(null);

  const [messages, setMessages] = useState([
    { 
      id: 1, 
      type: 'bot', 
      content: "Hi there! I'm Ecomm. I know about all the products in the house. Ask me anything!" 
    }
  ]);

  
  useEffect(() => {
    
    const initChat = async () => {
      try {
        const ai = new GoogleGenAI({ apiKey: "AIzaSyCNRqIInB3ACVy_J-0jJbDAmMsHVMbb7Pg" });
        
        
        const chat = ai.chats.create({
          model: "gemini-2.5-flash", 
          history: [
            // {
            //   role: "user",
            //   parts: [{ text: "Hello" }],
            // },
            // {
            //   role: "model",
            //   parts: [{ text: "Great to meet you. What would you like to know?" }],
            // },
          ],
          config: {
            systemInstruction: `You are the AI Product Expert for an e-commerce store.
    
    **Your Goal:** Answer the user's specific question using ONLY the Product Context provided below. 
    If the answer is not in the context, strictly say: "I don't have that specific detail currently."
    
    **Tone:** Helpful, concise, and enthusiastic. Do not write long paragraphs unless asked.

    **Product Context:**
    - Product Name: ${item_name}
    - Item Code: ${item_code}
    - Category: ${item_group}
    - Technical Specifications/Description: ${description}
    """
    
    Based on the Product Context, answer this query. 
    Provide the response in JSON format containing an 'answer' and 'suggested_questions'.`
          }
        });

        chatRef.current = chat;
        console.log("Chat initialized successfully", chat);

      } catch (error) {
        console.error("Failed to initialize AI:", error);
      }
    };

    initChat();
  }, [item_code, item_name, item_group, description]);

  
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isOpen]);

  
  const handleSend = async () => {
    if (!input.trim()) return;

    // A. Add User Message
    const userMsg = { id: Date.now(), type: 'user', content: input };
    setMessages(prev => [...prev, userMsg]);
    
    const currentInput = input;
    setInput('');
    setIsTyping(true);

    try {
      if (!chatRef.current) {
        throw new Error("Chat not initialized yet");
      }

      
      const result = await chatRef.current.sendMessage({
        message: currentInput,
      });

      
      const responseText = result.text; 

      
      let productData = null;
      if (currentInput.toLowerCase().includes('sneaker') || currentInput.toLowerCase().includes('shoe')) {
        productData = {
          name: "Urban Drift X1",
          price: "$129.00",
          image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=300&q=80"
        };
      }

      setIsTyping(false);

    
      const jsonString = responseText.replace(/```json\n?/g, '').replace(/```/g, '').trim();
      const data = JSON.parse(jsonString);



  setSuggestedQuestions(data.suggested_questions)

      // E. Update UI
      setMessages(prev => [...prev, {
        id: Date.now() + 1,
        type: 'bot',
        content: data.answer,
        product: productData
      }]);

    } catch (error) {
      console.error("Chat Error:", error);
      setIsTyping(false);
      setMessages(prev => [...prev, {
        id: Date.now() + 1,
        type: 'bot',
        content: "Oops! Connection failed. (Check console for details)"
      }]);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end space-y-4 font-sans">
      
      {/* Chat Window */}
      <div 
        className={`
          transition-all duration-300 ease-in-out transform origin-bottom-right
          ${isOpen ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-95 translate-y-4 pointer-events-none'}
          w-95 h-[31rem] lg:h-150 bg-white/90 backdrop-blur-xl border border-white/20 shadow-2xl rounded-3xl overflow-hidden flex flex-col
        `}
      >
        {/* Header */}
        <div className="bg-linear-to-r from-violet-600 to-indigo-600 p-4 flex items-center justify-between shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center backdrop-blur-sm overflow-hidden p-1">
              <img src={botLogo} className='w-full h-full object-cover rounded-full' alt="Bot" />
            </div>
            <div>
              <h3 className="text-white font-semibold text-sm">Ecomm Assistant</h3>
              <p className="text-indigo-100 text-xs flex items-center gap-1">
                <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                Online
              </p>
            </div>
          </div>
          <button 
            onClick={() => setIsOpen(false)}
            className="text-white/80 hover:text-white hover:bg-white/10 p-2 rounded-full transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-4 space-y-6 bg-slate-50">
          {messages.map((msg) => (
            <div 
              key={msg.id} 
              className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div 
                className={`
                  max-w-[85%] rounded-2xl p-3.5 text-sm leading-relaxed shadow-sm
                  ${msg.type === 'user' 
                    ? 'bg-indigo-600 text-white rounded-br-none' 
                    : 'bg-white text-slate-700 border border-slate-100 rounded-bl-none'}
                `}
              >
                {msg.content}
                
                {/* Product Card */}
                {msg.product && (
                  <div className="mt-3 bg-slate-50 border border-slate-100 rounded-xl overflow-hidden shadow-sm group cursor-pointer hover:shadow-md transition-all">
                    <div className="h-32 overflow-hidden">
                      <img 
                        src={msg.product.image} 
                        alt={msg.product.name} 
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="p-3">
                      <div className="flex justify-between items-start mb-1">
                        <h4 className="font-semibold text-slate-800">{msg.product.name}</h4>
                        <span className="text-indigo-600 font-bold bg-indigo-50 px-2 py-0.5 rounded text-xs">
                          {msg.product.price}
                        </span>
                      </div>
                      <button className="w-full mt-2 bg-slate-900 text-white text-xs py-2 rounded-lg flex items-center justify-center gap-2 hover:bg-slate-800 transition-colors">
                        View Details <ArrowRight className="w-3 h-3" />
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}

          {/* Typing Animation */}
          {isTyping && (
            <div className="flex justify-start">
              <div className="bg-white border border-slate-100 rounded-2xl rounded-bl-none p-4 shadow-sm flex items-center gap-1">
                <span className="w-2 h-2 bg-indigo-400 rounded-full animate-bounce"></span>
                <span className="w-2 h-2 bg-indigo-400 rounded-full animate-bounce [animation-delay:0.2s]"></span>
                <span className="w-2 h-2 bg-indigo-400 rounded-full animate-bounce [animation-delay:0.4s]"></span>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Input */}
        <div className="p-4 bg-white border-t border-slate-100">
                      <div className="flex gap-2 overflow-x-auto pb-3 mb-1 no-scrollbar">
            {
                suggestedQuestions &&
            suggestedQuestions.map((chip) => (
              <button 
                key={chip}
                onClick={() => setInput(chip)}
                className="whitespace-nowrap px-3 py-1.5 bg-slate-100 hover:bg-slate-200 text-slate-600 text-xs rounded-full transition-colors border border-slate-200"
              >
                {chip}
              </button>
            ))}
          </div>
          <div className="relative flex items-center">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Ask about products..."
              className="w-full bg-slate-100 text-slate-800 text-sm rounded-xl pl-4 pr-12 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 transition-all placeholder:text-slate-400"
            />
            <button 
              onClick={handleSend}
              disabled={!input.trim() || isTyping}
              className="absolute right-2 p-2 bg-black text-white rounded-lg disabled:opacity-50 disabled:cursor-not-allowed transition-all shadow-md"
            >
              <Send className="w-4 h-4" />
            </button>
          </div>
          <div className="text-center mt-2">
            <span className="text-[10px] text-slate-400">Powered by Gemini AI</span>
          </div>
        </div>
      </div>

      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`
          relative w-14 h-14 rounded-full shadow-2xl flex items-center justify-center transition-all duration-300 hover:scale-110
          ${isOpen ? 'bg-white text-indigo-600 rotate-90' : 'bg-indigo-600 text-white rotate-0'}
        `}
      >
        {isOpen ? <X className="w-6 h-6" /> : <MessageCircle className="w-6 h-6" />}
        {!isOpen && (
          <span className="absolute top-0 right-0 w-4 h-4 bg-red-500 rounded-full border-2 border-white"></span>
        )}
      </button>
    </div>
  );
};

export default EcommerceChatbot;