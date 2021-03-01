import {ReactNode} from 'react'
import { ViewPropsAndroid } from 'react-native';

export interface contextProps {
    children: ReactNode;
}

export interface data {
    nome: string;
    level: number;
    foto: string;
}


export interface challenge{
    description: String;
    amount: number;
    type: String;
}

export interface dataContext {
    user: data;
    newChallenge: () => void;
    showModal: () => void;
    failChallenge: () => void;
    activeChallenge: challenge;
    activeModal: boolean;
    experienceBar: number;
}

export interface dataContextCountdown{
    time: number;
    minutes: number;
    seconds: number;
    isActive: boolean;
    hasFinished: boolean;
    startCountdown: ()=> void;
    stopCountodown: ()=> void;
    resetTimeCountdown: ()=> void;
}