import React from 'react';
import { Button as RSButton } from 'reactstrap';
import { ButtonProps } from './interfaces';
import { Image } from '@Components'
import classNames from 'classnames';

function Button({
  text,className, color = 'primary', variant = 'default', size = 'md', icon, onEnter, ...rest
}: ButtonProps) {

  return (
    <>
      {variant === 'default' && <RSButton type={'button'} size={size} color={color} {...rest} >{text}</RSButton>}

      {(variant === 'icon' || variant === 'icon-with-text') &&
        // <RSButton type={'button'} size={size} className={'btn-icon'} color={color} {...rest} >
        //   {
        //     <span className={`btn-inner--icon ${variant === 'icon-with-text' && 'mr-1'}`}>
        //       <i className='ni ni-atom' />
        //     </span>
        //   }
        //   {
        //     variant === 'icon-with-text' &&
        //     <span className={'btn-inner--text'}>{text}</span>
        //   }
        // </RSButton>
        <RSButton type={'button'} size={size} className={'btn-icon'} color={color} {...rest} >
          {
            <span className={`btn-inner--icon ${variant === 'icon-with-text' && 'mr-1'}`}>
              <Image src={icon} height={15} width={15}  className='mx-3 mb-1'/>
            </span>
          }
          {
            variant === 'icon-with-text' &&
            <span className={'btn-inner--text'}>{text}</span>
          }
        </RSButton>

      }

      {variant === 'icon-rounded' &&
        <RSButton type={'button'} size={size} className={`btn-icon-only rounded-circle d-flex align-items-center justify-content-center ${className}`} color={color}  {...rest} >
          {/* <span className={'btn-inner--icon'}>
            <i className='ni ni-atom' />
          </span> */}
          <Image src={icon} height={"70%"} width={"70%"} />
        </RSButton>
      }
    </>
  )
}
export { Button };
