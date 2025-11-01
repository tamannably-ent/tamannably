'use client'
import '@ant-design/v5-patch-for-react-19';
import ContactEmail from '@/components/email/ContactEmail'
import { CompanyName } from '@/lib/homeContent'
import React, { useEffect, useState } from 'react'
import { Form, Input, Button, message, Space, Divider, Typography } from 'antd';
import Head from 'next/head';
import { FaUser } from 'react-icons/fa';
import { MdMail } from 'react-icons/md';
import { FaMapPin } from 'react-icons/fa';
import {FaMessage} from 'react-icons/fa6';
import {z} from 'zod';
import Paragraph from 'antd/es/skeleton/Paragraph';
import MapComponent from '@/components/Maps';
import { fa } from 'zod/v4/locales';
// import TextArea from 'antd/es/input/TextArea';
// import { form } from 'framer-motion/client';

const { TextArea } = Input;
const { Text } = Typography;

// Zod schema for form validation
const contactSchema = z.object({
  name: z.string().min(4, 'Name must be at least 4 characters').max(50, 'Name must not exceed 50 characters'),
  email: z.email('Invalid email address').regex(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/, "Email must be a valid format"),
  subject: z.string().min(5, 'Subject must be at least 5 characters').max(100, 'Subject must not exceed 100 characters'),
  message: z.string().min(20, 'Message must be at least 20 characters').max(1000, 'Message must not exceed 1000 characters'),
});

type ContactFormData = z.infer<typeof contactSchema>;

type latlng = {
    lat: number,
    lng: number
};

const center = {
  lat: 15.143187750194295,
  lng: 76.91600199083364
};

const contactPage = () => {
    const [form] = Form.useForm<ContactFormData>();
    const [isSubmitting, setIsSubmitting] = useState(false);

    const [lat, setLat] = useState<number>(center.lat);
    const [lng, setLng] = useState<number>(center.lng);

    const [latLong, setLatLong] = useState<latlng | null>({lat, lng})

    useEffect(()=>{
        // console.log(`lat: ${lat}, Long: ${lng} `)
        if (lat && lng){
            setLatLong({ lat, lng })
        
            console.log(`Lat-long: `,latLong)
        }
    },[lat, lng])

  const onFinish = async (values: ContactFormData) => {
    setIsSubmitting(true);
    // console.log(values);
    try {
      contactSchema.parse(values);

      const response = await fetch('/api/v1/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values),
      });

      if (!response.ok) {
        message.error('Failed to send message. Please try again.');
        setIsSubmitting(false); 
      }

      const data = await response.json();

      if (data.message === 'success') {
        message.success('Message sent successfully!');
        setIsSubmitting(false);
        form.resetFields();
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      if (error instanceof z.ZodError) {
        error.issues.forEach((err) => {
          message.error(err.message);
          setIsSubmitting(false);
        });
      } else {
        message.error('Failed to send message. Please try again.');
        setIsSubmitting(false);
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className='max-w-4xl w-full space-y-8 bg-gray-900 p-10 rounded-xl shadow-2xl mx-auto mt-[100px]'>

      <div>
        <h2 className='mt-1 text-center text-3xl font-extrabold text-gray-300'>Get in Touch</h2>
        <p className='mt-1 mb-4 text-center text-sm text-gray-400'>
            I'd love to hear from you! Fill out the form below to get in touch.
        </p>

        <Form
          form={form}
          name="contact"
          onFinish={onFinish}
          layout="vertical"
          className="mt-8 space-y-6"
        >
          <Form.Item
            name="name"
            rules={[{ required: true, message: 'Please input your name!' }]}
          >
            <Input prefix={<FaUser className="site-form-item-icon" />} placeholder="Your Name" size="large" />
          </Form.Item>
          <Form.Item
            name="email"
            rules={[
              { required: true, message: 'Please input your email!' },
              { type: 'email', message: 'Please enter a valid email!' }
            ]}
          >
            <Input prefix={<MdMail className="site-form-item-icon" />} placeholder="Your Email" size="large" />
          </Form.Item>
          <Form.Item
            name="subject"
            rules={[{ required: true, message: 'Please input a subject!' }]}
          >
            <Input prefix={<FaMessage className="site-form-item-icon" />} placeholder="Subject" size="large" />
          </Form.Item>
          <Form.Item
            name="message"
            rules={[{ required: true, message: 'Please input your message!' }]}
          >
            <TextArea
              placeholder="Your Message"
              autoSize={{ minRows: 4, maxRows: 8 }}
              
            />
          </Form.Item>
          <Form.Item
            name="latitude"
            rules={[{required: false, message:"Please input Latitude (optional)"}]}
          >
            <Input prefix={<FaMapPin className='site-form-item-icon' />} placeholder='Latitude' size='large' onChange={(e)=>setLat((e.target.value))}/>

          </Form.Item>

          <Form.Item
            name="longitude"
            rules={[{required: false, message:"Please input Longitude (optional)"}]}
          >
            <Input prefix={<FaMapPin className='site-form-item-icon' />} placeholder='Longitude' size='large' onChange={(e)=>setLng((e.target.value))}/>

          </Form.Item>
          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </Button>
          </Form.Item>
        </Form>
      </div>
      <main className="flex min-h-screen flex-col items-center justify-between p-5 text-gray-800">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm">
        <h1 className="text-4xl font-bold text-center mb-8">
          Get Address from Map
        </h1>
        <MapComponent lat={lat} lng={lng} />
      </div>
    </main>
    </div>

  )
}

export default contactPage
