import ScrollContainer from '@/components/ui/scroll-container';
import GradientText from '@/components/ui/gradient-text';
import RainbowButton from '@/components/ui/rainbow-button';
import React from 'react';
import { FaStar } from 'react-icons/fa';
import Button from '@/components/ui/button';

const HeroSection: React.FC = () => {
    return (
        <section className="flex flex-col items-center justify-center py-20 text-center">
            <RainbowButton className='rounded-full' variant="opaque" opaqueClassName="rounded-full">
                <FaStar className='mr-2' />
                Star this project on GitHub
            </RainbowButton>
            <h1 className="text-6xl font-extrabold mb-6">
                Building your <GradientText text="UI dreams" deg="90deg" />
            </h1>
            <p className="text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
                Modern, customizable, animated and easy to use components for your next project. Free and open source.
            </p>
            <div className="flex justify-center gap-4">
                <Button>
                    Getting Started
                </Button>
                <Button variant="outline">
                    See Components
                </Button>
            </div>
            <div className='max-w-[800px] w-full mt-10 h-96'>
                <ScrollContainer>
                    Teste caralho filha da puta
                </ScrollContainer>
            </div>

        </section>
    );
};

export default HeroSection;