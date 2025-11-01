import { NextRequest, NextResponse } from 'next/server';
import {EmailTemplate } from '@/components/EmailTemplate';
import { Resend } from 'resend';
import { v4 as uuid } from 'uuid';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
    
    try{
        const { name, email, subject, message, latitude, longitude } = await req.json();
        console.log(req)
        const bodyMessage = `${message} https://www.google.com/maps/@${latitude},${longitude},17z`
        const { data, error } = await resend.emails.send({
            from: 'Contact Form <onboarding@resend.dev>',
            to: 'tamannably@gmail.com',
            subject: subject || 'New Contact Form Submission',
            replyTo: email,
            headers: {
                'X-Entity-Ref-ID': uuid(),
            },
            react: EmailTemplate({ firstName: name, message: bodyMessage }) as React.ReactElement,
        })

        if (error){
            return NextResponse.json({ error }, { status: 500 });
        }

        return NextResponse.json({ data, message: 'success' }, { status: 200 });
    } catch(error){
        console.error('API Error:', error)
        return NextResponse.json({error: 'Internal Server Error'}, { status:500 });
    }
}