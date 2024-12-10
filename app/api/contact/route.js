import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(req) {
    try {
        const body = await req.json()
        const { name, email, projectType, budget, deadline, description } = body

        console.log('=== Início do processamento da requisição ===')
        console.log('Dados recebidos:', { 
            name, 
            email, 
            projectType, 
            budget, 
            deadline, 
            description 
        })
        console.log('Variáveis de ambiente:', {
            emailUser: process.env.EMAIL_USER ? 'Definido' : 'Não definido',
            emailPass: process.env.EMAIL_PASS ? 'Definido' : 'Não definido'
        })

        const transporter = nodemailer.createTransport({
            service: 'gmail',
            host: 'smtp.gmail.com',
            port: 587,
            secure: false,
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS
            },
            tls: {
                rejectUnauthorized: false
            },
            debug: true,
            logger: true
        })

        console.log('Transporter configurado')

        try {
            console.log('Verificando conexão...')
            await transporter.verify()
            console.log('Conexão verificada com sucesso')
        } catch (verifyError) {
            console.error('Erro na verificação do transporter:', {
                name: verifyError.name,
                message: verifyError.message,
                stack: verifyError.stack,
                code: verifyError.code
            })
            throw verifyError
        }

        try {
            console.log('Enviando email para admin...')
            const adminResult = await transporter.sendMail({
                from: process.env.EMAIL_USER,
                to: process.env.EMAIL_USER,
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
            console.log('Email para admin enviado:', adminResult)
        } catch (adminError) {
            console.error('Erro ao enviar email para admin:', {
                name: adminError.name,
                message: adminError.message,
                stack: adminError.stack,
                code: adminError.code
            })
            throw adminError
        }

        try {
            console.log('Enviando email para cliente...')
            const clientResult = await transporter.sendMail({
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
            console.log('Email para cliente enviado:', clientResult)
        } catch (clientError) {
            console.error('Erro ao enviar email para cliente:', {
                name: clientError.name,
                message: clientError.message,
                stack: clientError.stack,
                code: clientError.code
            })
            throw clientError
        }

        console.log('=== Processamento concluído com sucesso ===')
        return NextResponse.json({ 
            message: 'Emails enviados com sucesso',
            success: true 
        }, { status: 200 })

    } catch (error) {
        console.error('Erro geral na API:', {
            name: error.name,
            message: error.message,
            stack: error.stack,
            code: error.code,
            fullError: error
        })
        return NextResponse.json({ 
            error: 'Erro ao enviar emails',
            message: error.message,
            errorDetails: {
                name: error.name,
                code: error.code
            },
            success: false 
        }, { status: 500 })
    }
} 