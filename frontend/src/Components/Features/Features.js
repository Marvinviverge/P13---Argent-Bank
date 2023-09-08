import React from 'react';

import IconChat from '@/Assets/img/icon-chat.png'
import IconMoney from '@/Assets/img/icon-money.png'
import IconSecurity from '@/Assets/img/icon-security.png'

import './Features.css'

const Features = () => {
    const datasFeatures = [
        {
            icon: IconChat,
            title: 'You are our #1 priority',
            paragraph:
                'Need to talk to a representative? You can get in touch through our 24/7 chat or through a phone call in less than 5 minutes.',
        },
        {
            icon: IconMoney,
            title: 'More savings means higher rates',
            paragraph:
                'The more you save with us, the higher your interest rate will be!',
        },
        {
            icon: IconSecurity,
            title: 'Security you can trust',
            paragraph:
                'We use top of the line encryption to make sure your data and money is always safe.',
        },
    ]

    return (
        <section class="features">
            <h2 class="sr-only">Features</h2>
            {
                datasFeatures.map((item) => {
                    return (
                        <div className="feature-item">
                            <img src={item.icon} alt="Icon" className="feature-icon" />
                            <h3 className="feature-item-title">{item.title}</h3>
                            <p>{item.paragraph}</p>
                        </div>
                    )
                })
            }
        </section>
    );
};

export default Features;