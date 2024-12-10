import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(req) {
    try {
        const body = await req.json()
        const { name, email, projectType, budget, deadline, description } = body

        // Configurar o transporter do nodemailer
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS
            },
            tls: {
                rejectUnauthorized: false
            }   
        })

        // Email para você
        await transporter.sendMail({
            from: process.env.EMAIL_USER,
            to: 'caua.pereira1409@gmail.com',
            subject: `Novo Projeto - ${projectType}`,
            html: `
                <h2>Nova Solicitação de Projeto</h2>
                <p><strong>Nome:</strong> ${name}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Tipo de Projeto:</strong> ${projectType}</p>
                <p><strong>Orçamento:</strong> ${budget}</p>
                <p><strong>Prazo:</strong> ${deadline}</p>
                <p><strong>Descrição:</strong> ${description}</p>
            `
        })

        // Email de confirmação para o cliente
        await transporter.sendMail({
            from: process.env.EMAIL_USER,
            to: email,
            subject: 'Solicitação de Projeto Recebida',
            html: `
                <h2>Olá ${name}!</h2>
                <p>Recebi sua solicitação de projeto e entrarei em contato em breve.</p>
                <p>Detalhes do projeto:</p>
                <ul>
                    <li>Tipo: ${projectType}</li>
                    <li>Orçamento: ${budget}</li>
                    <li>Prazo: ${deadline}</li>
                </ul>
                <p>Atenciosamente,<br>Cauã Pereira</p>
            `
        })

        return NextResponse.json({ message: 'Email sent successfully' }, { status: 200 })
    } catch (error) {
        console.error('Error sending email:', error)
        return NextResponse.json({ error: 'Error sending email' }, { status: 500 })
    }
} 