import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, MessageSquare, AlertCircle, CheckCircle } from 'lucide-react';
import emailjs from '@emailjs/browser';

const FeedbackForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState('idle'); // idle, loading, success, error
  const [errorMsg, setErrorMsg] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMsg('');

    const emailInput = formData.email.toLowerCase().trim();

    // 1. Logic ตรวจสอบอีเมล (ขึ้นต้นด้วย it และลงท้ายด้วย utd.ac.th)
    const isUtdDomain = emailInput.endsWith('@utd.ac.th') || emailInput.endsWith('@it.utd.ac.th');
    const startsWithIt = emailInput.startsWith('it');

    if (!isUtdDomain || !startsWithIt) {
      setStatus('error');
      setErrorMsg('กรุณาใช้อีเมลนักเรียน ICT (ตัวอย่าง: it39558@utd.ac.th)');
      return;
    }

    // 2. ส่งข้อมูลจริงผ่าน EmailJS
    const SERVICE_ID = 'service_540tlge'; 
    const TEMPLATE_ID = 'template_mrcbrki';
    const PUBLIC_KEY = 'tqUU2lCcS1HdH84TJ';

    const templateParams = {
      name: formData.name,
      email: emailInput,
      message: formData.message,
    };

    emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY)
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        setStatus('success');
        setFormData({ name: '', email: '', message: '' }); 
      })
      .catch((err) => {
        console.error('FAILED...', err);
        setStatus('error');
        setErrorMsg('เกิดข้อผิดพลาดในการส่งข้อมูล กรุณาลองใหม่ภายหลัง');
      });
  };

  return (
    <section className="w-full bg-white py-20 border-t border-slate-100">
      <div className="container mx-auto px-4 max-w-2xl">
        
        <div className="text-center mb-10">
          <motion.div 
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            className="w-16 h-16 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-4"
          >
            <MessageSquare size={32} />
          </motion.div>
          <h2 className="text-3xl font-bold text-gray-900 mb-2">กล่องแสดงความคิดเห็น</h2>
          <p className="text-gray-600">
            สำหรับนักเรียน ICT TALENT โรงเรียนอุตรดิตถ์ <br/>
            ส่งตรงถึงนักพัฒนา เพื่อการปรับปรุงระบบให้ดียิ่งขึ้น
          </p>
        </div>

        <motion.form 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          onSubmit={handleSubmit}
          className="bg-slate-50 p-8 rounded-2xl shadow-sm border border-slate-200"
        >
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">ชื่อ-นามสกุล</label>
            <input 
              type="text" 
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              placeholder="ชื่อ-นามสกุล ของคุณ"
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 outline-none"
            />
          </div>

          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">
                อีเมลนักเรียน (ต้องใช้ @utd.ac.th)
            </label>
            <input 
                type="email" 
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                placeholder="itxxxxx@utd.ac.th"
                className={`w-full px-4 py-3 rounded-lg border focus:ring-2 outline-none transition-all
                ${status === 'error' ? 'border-red-300 focus:ring-red-200' : 'border-gray-300 focus:ring-blue-500'}
                `}
            />
            {status === 'error' && (
              <p className="text-red-500 text-sm mt-2 flex items-center gap-1">
                <AlertCircle size={14} /> {errorMsg}
              </p>
            )}
          </div>

          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">ข้อเสนอแนะ</label>
            <textarea 
              name="message"
              required
              rows="4"
              value={formData.message}
              onChange={handleChange}
              placeholder="พิมพ์ข้อความที่ต้องการส่งถึงนักพัฒนา..."
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 outline-none resize-none"
            ></textarea>
          </div>

          <button 
            type="submit"
            disabled={status === 'loading' || status === 'success'}
            className={`w-full py-3 rounded-lg font-bold text-white flex items-center justify-center gap-2 transition-all
              ${status === 'success' ? 'bg-green-500' : 'bg-blue-600 hover:bg-blue-700'}
              ${status === 'loading' ? 'opacity-70 cursor-wait' : ''}
            `}
          >
            {status === 'loading' ? 'กำลังส่ง...' : status === 'success' ? 'ส่งสำเร็จ!' : 'ส่งความคิดเห็น'}
          </button>

          <AnimatePresence>
            {status === 'success' && (
              <motion.div 
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                className="mt-4 p-4 bg-green-50 text-green-700 rounded-lg text-center text-sm"
              >
                ขอบคุณสำหรับข้อมูลครับ!
              </motion.div>
            )}
          </AnimatePresence>
        </motion.form>
      </div>
    </section>
  );
};

export default FeedbackForm;