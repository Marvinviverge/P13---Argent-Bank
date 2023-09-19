import React from 'react';
import { datasFeatures } from '@/Assets/data/datasFeatures';

import './Features.css'

const Features = () => {

    return (
        <section className="features">
            <h2 className="sr-only">Features</h2>
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