'use client';

import Image from "next/image";
import styles from "./page.module.css";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const homeSection = document.getElementById('home');
      const homeHeight = homeSection?.offsetHeight || 0;
      
      // Remove dynamic color changes - keep all navigation text black
      const navLinks = document.querySelectorAll('[data-section]');
      navLinks.forEach((link) => {
        const linkElement = link as HTMLElement;
        linkElement.style.color = '#000';
      });

      // Handle horizontal pill navigation
      const pillLinks = document.querySelectorAll('.pillLink');
      pillLinks.forEach((link) => {
        const section = link.getAttribute('data-section');
        const linkElement = link as HTMLElement;
        
        // Remove active class from all pills
        linkElement.classList.remove('active');
        
        // Determine which section is currently in view
        const sections = ['home', 'about', 'experience', 'skills', 'education'];
        let activeSection = 'home';
        
        for (let i = sections.length - 1; i >= 0; i--) {
          const sectionElement = document.getElementById(sections[i]);
          if (sectionElement) {
            const rect = sectionElement.getBoundingClientRect();
            if (rect.top <= 100) {
              activeSection = sections[i];
              break;
            }
          }
        }
        
        // Add active class to current section
        if (section === activeSection) {
          linkElement.classList.add('active');
          // Add glow effect for active pill
          linkElement.style.transform = 'scale(1.05)';
          linkElement.style.boxShadow = '0 0 15px rgba(85, 10, 53, 0.4)';
        } else {
          // Remove glow effect for inactive pills
          linkElement.style.transform = 'scale(1)';
          linkElement.style.boxShadow = '';
        }
      });

      // Handle sticky navigation slim mode
      const horizontalNav = document.querySelector('.horizontalNav') as HTMLElement;
      if (horizontalNav) {
        if (scrollPosition > 50) {
          horizontalNav.classList.add('scrolled');
        } else {
          horizontalNav.classList.remove('scrolled');
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial call

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={styles.container}>
      {/* Horizontal Pill Navigation */}
      <nav className={styles.horizontalNav}>
        <div className={styles.pillContainer}>
          <a href="#home" className={styles.pillLink} data-section="home">
            <span className={styles.pillText}>Home</span>
            <div className={styles.pillUnderline}></div>
          </a>
          <a href="#about" className={styles.pillLink} data-section="about">
            <span className={styles.pillText}>About Me</span>
            <div className={styles.pillUnderline}></div>
          </a>
          <a href="#experience" className={styles.pillLink} data-section="experience">
            <span className={styles.pillText}>Professional Experience</span>
            <div className={styles.pillUnderline}></div>
          </a>
          <a href="#skills" className={styles.pillLink} data-section="skills">
            <span className={styles.pillText}>Skills & Expertise</span>
            <div className={styles.pillUnderline}></div>
          </a>
          <a href="#education" className={styles.pillLink} data-section="education">
            <span className={styles.pillText}>Education & Training</span>
            <div className={styles.pillUnderline}></div>
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className={styles.hero}>
        <div className={styles.heroContent}>
          <div className={styles.heroHeader}>
            <h1 className={styles.heroTitle}>MUHAMMAD UMAIR</h1>
            <div className={styles.subLogo}>
              <div className={styles.logoIcon}>Mr</div>
              <span className={styles.logoText}>umair</span>
            </div>
          </div>
          
          <div className={styles.heroImage}>
            <div className={styles.profileImageWrapper}>
              <Image
                src="/profile.jpg"
                alt="Muhammad Umair"
                width={300}
                height={300}
                className={styles.profileImage}
                priority
                quality={85}
                placeholder="blur"
                blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
              />
            </div>
          </div>
          
          <div className={styles.heroFooter}>
            <div className={styles.tagline}>
              <span><strong>Accounts & Client Relations Expert | Finance | Visa | Insurance</strong></span>
            </div>
          </div>
          
          <div className={styles.heroButtons}>
            <a href="#contact" className={styles.primaryButton}>Get In Touch</a>
            <a href="#experience" className={styles.secondaryButton}>View Experience</a>
            <a href="/resume.pdf" className={styles.primaryButton} download>
              Download Resume (PDF)
              <span className={styles.downloadIcon}>↓</span>
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className={styles.section}>
        <div className={styles.sectionContainer}>
          <h2 className={styles.sectionTitle}>About Me</h2>
          <div className={styles.aboutContent}>
                          <div className={styles.aboutText}>
                <p>
                  I'm building a career with a forward-thinking organization alongside committed professionals, where I can explore my potential and contribute in challenging, creative environments.
                </p>
              </div>
            <div className={styles.personalInfo}>
              <div className={styles.infoCard}>
                <h3>Personal Details</h3>
                <ul>
                  <li><strong>Date of Birth:</strong> 22-01-1998</li>
                  <li><strong>Nationality:</strong> Pakistani</li>
                  <li><strong>Location:</strong> Islamabad, Pakistan</li>
                  <li><strong>Languages:</strong> Urdu (Native), English (Proficient), Arabic (Learning)</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className={styles.section}>
        <div className={styles.sectionContainer}>
          <h2 className={styles.sectionTitle}>Professional Experience</h2>
          <div className={styles.experienceGrid}>
            <div className={styles.experienceCard}>
              <div className={styles.experienceHeader}>
                <h3>MEHTAB AL HARBI GROUP (SAUDI ARABIA)</h3>
                <span className={styles.role}>Hajj/Umrah Sales Representative & Assistant Accountant</span>
                <span className={styles.duration}>2023 – 2025</span>
              </div>
              <p>
                Assisted clients with Hajj/Umrah bookings, provided full customer support, and managed financial records.
              </p>
            </div>

            <div className={styles.experienceCard}>
              <div className={styles.experienceHeader}>
                <h3>SEED CRED</h3>
                <span className={styles.role}>Quality Assurance Agent → Competitive Analysis (HR)</span>
                <span className={styles.duration}>2022 – 2023</span>
              </div>
              <p>
                Ensured agent performance and discipline, maintained Excel reports, and conducted competitive analysis for app performance.
              </p>
            </div>

            <div className={styles.experienceCard}>
              <div className={styles.experienceHeader}>
                <h3>ETIMAD PRIVATE LIMITED (VISA COMPANY)</h3>
                <span className={styles.role}>Biometric Officer, Submitting Officer, Front Desk Officer, Back Office, Cashier</span>
                <span className={styles.duration}>2020 – 2022</span>
              </div>
              <p>
                Processed biometric data, handled visa documentation, managed cash, and coordinated with the Saudi Embassy.
              </p>
            </div>

            <div className={styles.experienceCard}>
              <div className={styles.experienceHeader}>
                <h3>EFU LIFE INSURANCE (PAKISTAN)</h3>
                <span className={styles.role}>Insurance Manager</span>
                <span className={styles.duration}>2019 – 2020</span>
              </div>
              <p>
                Directed sales operations, managed client portfolios, and delivered customized financial solutions.
              </p>
            </div>

            <div className={styles.experienceCard}>
              <div className={styles.experienceHeader}>
                <h3>SILK BANK (PAKISTAN)</h3>
                <span className={styles.role}>Accountant</span>
                <span className={styles.duration}>2018 – 2019</span>
              </div>
              <p>
                Managed high-value client accounts, ensured accurate financial records, and built strong client relationships.
              </p>
            </div>

            <div className={styles.experienceCard}>
              <div className={styles.experienceHeader}>
                <h3>ASKARI LIFE INSURANCE (PAKISTAN)</h3>
                <span className={styles.role}>Insurance Agent</span>
                <span className={styles.duration}>2017 – 2018</span>
              </div>
              <p>
                Generated insurance sales, provided customer service, and educated clients on financial protection.
              </p>
            </div>

            <div className={styles.experienceCard}>
              <div className={styles.experienceHeader}>
                <h3>BULLS EYE (PAKISTAN)</h3>
                <span className={styles.role}>Marketing Officer</span>
                <span className={styles.duration}>2014 – 2017</span>
              </div>
              <p>
                Executed marketing campaigns, boosted brand awareness, and targeted promotions to specific audiences.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className={styles.section}>
        <div className={styles.sectionContainer}>
          <h2 className={styles.sectionTitle}>Skills & Expertise</h2>
          <div className={styles.skillsGrid}>
            <div className={styles.skillsCategory}>
              <h3>Personal Skills</h3>
              <div className={styles.skillsList}>
                <span className={styles.skillTag}>Positive & Encouraging</span>
                <span className={styles.skillTag}>Creative Lesson Planning</span>
                <span className={styles.skillTag}>Experimental Learning</span>
                <span className={styles.skillTag}>Self-Motivated</span>
                <span className={styles.skillTag}>Fast Learner</span>
                <span className={styles.skillTag}>Communication Skills</span>
              </div>
            </div>
            <div className={styles.skillsCategory}>
              <h3>Technical Skills</h3>
              <div className={styles.skillsList}>
                <span className={styles.skillTag}>Marketing</span>
                <span className={styles.skillTag}>Microsoft Office</span>
                <span className={styles.skillTag}>Window Installation</span>
                <span className={styles.skillTag}>Internet Data Basic</span>
                <span className={styles.skillTag}>Information Technology</span>
                <span className={styles.skillTag}>Illustrator & Photoshop</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className={styles.section}>
        <div className={styles.sectionContainer}>
          <h2 className={styles.sectionTitle}>Education & Training</h2>
          <div className={styles.educationGrid}>
            <div className={styles.educationCard}>
              <h3>Bachelor of Commerce (B.COM)</h3>
              <p>FBISE, Islamabad</p>
                             <span className={`${styles.status} ${styles.completed}`}>Completed</span>
            </div>
            <div className={styles.educationCard}>
              <h3>Intermediate (I.COM I & II)</h3>
              <p>H-8/4 Commerce College, Islamabad</p>
              <span className={`${styles.status} ${styles.completed}`}>Completed</span>
            </div>
            <div className={styles.educationCard}>
              <h3>Matriculation (Computer Science)</h3>
              <p>IMSB I-10/1, Islamabad</p>
              <span className={`${styles.status} ${styles.completed}`}>Completed</span>
            </div>
            <div className={styles.educationCard}>
              <h3>Professional Training</h3>
              <p>1 Year Information Technology Course</p>
              <p>1 Year Illustrator & Photoshop Course</p>
              <span className={`${styles.status} ${styles.completed}`}>Completed</span>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className={styles.section}>
        <div className={styles.sectionContainer}>
          <h2 className={styles.sectionTitle}>Get In Touch</h2>
          <div className={styles.contactContent}>
            <div className={styles.contactCard}>
              <h3>Contact Me</h3>
              <p>Ready to work together? Feel free to reach out!</p>
              <div className={styles.contactButtons}>
                <a href="tel:+923328892925" className={styles.contactButton}>
                  <div className={styles.contactIcon}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M3 5C3 3.89543 3.89543 3 5 3H8.27924C8.70967 3 9.09181 3.27543 9.22792 3.68377L10.7257 8.17721C10.8831 8.64932 10.6694 9.16531 10.2243 9.38787L7.96701 10.5165C9.06925 12.9612 11.0388 14.9308 13.4835 16.033L14.6121 13.7757C14.8347 13.3306 15.3507 13.1169 15.8228 13.2743L20.3162 14.7721C20.7246 14.9082 21 15.2903 21 15.7208V19C21 20.1046 20.1046 21 19 21H18C9.71573 21 3 14.2843 3 6V5Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <div className={styles.contactText}>
                    <span className={styles.contactLabel}>Call Me</span>
                    <span className={styles.contactValue}>+92 332 8892925</span>
                  </div>
                </a>
                <a href="mailto:mrumair266@gmail.com" className={styles.contactButton}>
                  <div className={styles.contactIcon}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <polyline points="22,6 12,13 2,6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <div className={styles.contactText}>
                    <span className={styles.contactLabel}>Email Me</span>
                    <span className={styles.contactValue}>mrumair266@gmail.com</span>
                  </div>
                </a>
              </div>
              
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      
    </div>
  );
}
