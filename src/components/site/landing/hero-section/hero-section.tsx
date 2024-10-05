import ContainerScroll from '@/components/ui/container-scroll';
import GradientText from '@/components/ui/gradient-text';
import RainbowButton from '@/components/ui/rainbow-button';
import React from 'react';
import { FaStar } from 'react-icons/fa';

const HeroSection: React.FC = () => {
    return (
        <section className="flex flex-col items-center justify-center py-20 text-center">
            <RainbowButton className='rounded-full' variant="opaque" opaqueClassName="rounded-full">
                <FaStar className='mr-2'/>
                Star this project on GitHub
            </RainbowButton>
            <h1 className="text-6xl font-extrabold mb-6">
                Building your <GradientText text="UI dreams" deg="90deg" />
            </h1>
            <p className="text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
                Modern, customizable, animated and easy to use components for your next project. Free and open source.
            </p>
            <div className="flex justify-center gap-4">
                <button className="btn btn-primary btn-lg">Começar agora</button>
                <button className="btn btn-outline btn-lg">Ver documentação</button>
            </div>
            <ContainerScroll>
                Teste caralho filha da puta 
            </ContainerScroll>
        </section>
    );
};

export default HeroSection;