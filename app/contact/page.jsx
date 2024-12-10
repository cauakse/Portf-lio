"use client"

import style from './page.module.scss'
import Header from '@/components/PRINCIPAIS/header/header'
import Footer from '@/components/PRINCIPAIS/footer/footer'
import { useState } from 'react'
import { NumericFormat } from 'react-number-format'

export default function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        projectType: 'website',
        budget: '',
        deadline: '',
        description: ''
    })
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [submitStatus, setSubmitStatus] = useState(null)

    const formatCurrency = (value) => {
        // Remove todos os caracteres não numéricos
        const numericValue = value.replace(/\D/g, '')
        
        // Converte para número e formata como moeda
        const formatted = new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL'
        }).format(numericValue / 100)

        return formatted
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        setIsSubmitting(true)
        setSubmitStatus(null)
        
        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            })

            const data = await response.json()

            if (response.ok && data.success) {
                setSubmitStatus('success')
                setFormData({
                    name: '',
                    email: '',
                    projectType: 'website',
                    budget: '',
                    deadline: '',
                    description: ''
                })
            } else {
                console.error('Erro na resposta:', data)
                setSubmitStatus('error')
            }
        } catch (error) {
            console.error('Erro ao enviar:', error)
            setSubmitStatus('error')
        } finally {
            setIsSubmitting(false)
        }
    }

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData(prev => ({
            ...prev,
            [name]: value
        }))
    }

    // Função específica para o input de orçamento
    const handleBudgetChange = (values) => {
        setFormData(prev => ({
            ...prev,
            budget: values.formattedValue
        }))
    }

    const validateEmail = (email) => {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        return regex.test(email)
    }

    return (
        <div className={style.container}>
            <Header turnBlack='false' follow='false' />
            
            <section className={style.hero}>
                <h1>Vamos Criar Algo Incrível Juntos</h1>
                <p>Transforme suas ideias em realidade com soluções personalizadas</p>
            </section>

            <section className={style.benefits}>
                <div className={style.benefitCard}>
                    <div className={style.benefitIcon}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                        </svg>
                    </div>
                    <h3>Segurança</h3>
                    <p>Desenvolvimento seguro e confiável com as melhores práticas do mercado</p>
                </div>

                <div className={style.benefitCard}>
                    <div className={style.benefitIcon}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <circle cx="12" cy="12" r="10"/>
                            <path d="M16 8l-4 4-4-4"/>
                            <path d="M12 16V8"/>
                        </svg>
                    </div>
                    <h3>Performance</h3>
                    <p>Aplicações otimizadas para máxima velocidade e desempenho</p>
                </div>

                <div className={style.benefitCard}>
                    <div className={style.benefitIcon}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/>
                            <path d="M8 21h8"/>
                            <path d="M12 17v4"/>
                        </svg>
                    </div>
                    <h3>Responsividade</h3>
                    <p>Design adaptativo para todos os dispositivos e tamanhos de tela</p>
                </div>
            </section>

            <section className={style.formSection}>
                <div className={style.formContainer}>
                    <div className={style.formInfo}>
                        <h2>Solicite um Projeto</h2>
                        <p>Preencha o formulário abaixo com os detalhes do seu projeto e entrarei em contato em breve.</p>
                        
                        <div className={style.contactInfo}>
                            <div className={style.infoItem}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                                    <polyline points="22,6 12,13 2,6"></polyline>
                                </svg>
                                <span>portfolioCauaPereira@gmail.com</span>
                            </div>
                            <div className={style.infoItem}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                                    <circle cx="12" cy="10" r="3"></circle>
                                </svg>
                                <span>Presidente Prudente, SP</span>
                            </div>
                        </div>
                    </div>

                    <form onSubmit={handleSubmit} className={style.form}>
                        <div className={style.formGroup}>
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                placeholder="Seu nome"
                                required
                            />
                        </div>

                        <div className={style.formGroup}>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="Seu email"
                                required
                                pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                                title="Por favor, insira um email válido"
                                onBlur={(e) => {
                                    if (!validateEmail(e.target.value)) {
                                        e.target.setCustomValidity('Por favor, insira um email válido')
                                    } else {
                                        e.target.setCustomValidity('')
                                    }
                                }}
                            />
                            {formData.email && !validateEmail(formData.email) && (
                                <span className={style.errorHint}>Email inválido</span>
                            )}
                        </div>

                        <div className={style.formGroup}>
                            <select
                                name="projectType"
                                value={formData.projectType}
                                onChange={handleChange}
                                required
                            >
                                <option value="website">Site</option>
                                <option value="webapp">Aplicação Web</option>
                                <option value="mobileapp">Aplicativo Mobile</option>
                                <option value="other">Outro</option>
                            </select>
                        </div>

                        <div className={style.formRow}>
                            <div className={style.formGroup}>
                                <NumericFormat
                                    thousandSeparator="."
                                    decimalSeparator=","
                                    prefix="R$ "
                                    decimalScale={2}
                                    fixedDecimalScale
                                    value={formData.budget}
                                    onValueChange={(values) => handleBudgetChange(values)}
                                    placeholder="Orçamento estimado"
                                    className={style.currencyInput}
                                />
                            </div>

                            <div className={style.formGroup}>
                                <input
                                    type="date"
                                    name="deadline"
                                    value={formData.deadline}
                                    onChange={handleChange}
                                    placeholder="Prazo desejado"
                                />
                            </div>
                        </div>

                        <div className={style.formGroup}>
                            <textarea
                                name="description"
                                value={formData.description}
                                onChange={handleChange}
                                placeholder="Descreva seu projeto"
                                required
                                rows="5"
                            ></textarea>
                        </div>

                        <button 
                            type="submit" 
                            className={style.submitButton}
                            disabled={isSubmitting}
                        >
                            {isSubmitting ? 'Enviando...' : 'Enviar Projeto'}
                        </button>

                        {submitStatus === 'success' && (
                            <div className={style.successMessage}>
                                Mensagem enviada com sucesso! Em breve entrarei em contato.
                            </div>
                        )}

                        {submitStatus === 'error' && (
                            <div className={style.errorMessage}>
                                Ocorreu um erro ao enviar a mensagem. Por favor, tente novamente.
                            </div>
                        )}
                    </form>
                </div>
            </section>

            <section className={style.socialSection}>
                <h2>Me Encontre nas Redes Sociais</h2>
                <div className={style.socialGrid}>
                    <a href="https://github.com/cauakse" target="_blank" rel="noreferrer" className={style.socialCard}>
                        <div className={style.socialIcon}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
                            </svg>
                        </div>
                        <span>GitHub</span>
                    </a>

                    <a href="https://www.linkedin.com/in/cau%C3%A3-pereira-domingues-9872a9305/" target="_blank" rel="noreferrer" className={style.socialCard}>
                        <div className={style.socialIcon}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                                <rect x="2" y="9" width="4" height="12"/>
                                <circle cx="4" cy="4" r="2"/>
                            </svg>
                        </div>
                        <span>LinkedIn</span>
                    </a>

                    <a href="https://instagram.com/caua_kse" target="_blank" rel="noreferrer" className={style.socialCard}>
                        <div className={style.socialIcon}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                            </svg>
                        </div>
                        <span>Instagram</span>
                    </a>
                </div>
            </section>

            <Footer link1="about" link2="projects" />
        </div>
    )
}