import GradientText from '@/components/ui/gradient-text';
import React from 'react';

const HeroSection: React.FC = () => {
    return (
        <section className="py-20 text-center">
            <h1 className="text-6xl font-extrabold mb-6">
                Build ing your <GradientText text="UI dreams" deg="90deg" />
            </h1>
            <p className="text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
                Modern, customizable, animated and easy to use components for your next project. Free and open source.
            </p>
            <div className="flex justify-center gap-4">
                <button className="btn btn-primary btn-lg">Começar agora</button>
                <button className="btn btn-outline btn-lg">Ver documentação</button>
            </div>
        </section>
    );
};

export default HeroSection;