import cn from 'classnames';

import { type ContainerProps } from './Container.types';
import styles from './Container.module.css';

export const Container = ({ className, ...props }: ContainerProps) => {
  return <div className={cn(className, styles.container)} {...props}></div>;
};