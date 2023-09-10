import classNames from 'classnames';
import React from 'react';
import styles from './Typography.module.scss';

export interface TypographyProps {
    variant:
        | 'title-xl-semibold'
        | 'title-xs-medium'
        | 'text-xl-regular'
        | 'text-sm-regular'
        | 'text-sm-semibold'
        | 'text-md-semibold'
        | 'text-xs-regular';
    children:
        | React.ReactNode
        | string
        | string[]
        | JSX.Element
        | JSX.Element[]
        | number
        | undefined
        | null;
    color?: 'blue-gdnt' | 'grey' | 'blue-primary' | 'white';
    localClassNames?: string;
}

export const Typography: React.FC<TypographyProps> = ({
    variant,
    children,
    color,
    localClassNames,
}) => {
    return (
        <p
            className={classNames(
                styles[variant],
                color ? styles[color] : undefined,
                localClassNames,
                styles.default
            )}
        >
            {children}
        </p>
    );
};
