/* eslint-disable camelcase */
import * as React from 'react'
import styled, { css } from 'styled-components'
import AntdButton from 'antd/lib/button'

interface BaseButtonProps {
  bgcolor?: string
  theme_color?: string
  width?: string | number
  fontSize?: string | number
  type?: any
  margin?: string
  margin_top?: string
  margin_bottom?: string
  margin_left?: string
  margin_right?: string
}

const getButtonPrimaryStyle = css`
  background-color: var(--blue-400) !important;
  color: var(--white) !important;
  border-color: var(--blue-400) !important;
`

const getButtonSecondaryStyle = css`
  background-color: var(--silver-100) !important;
  border-color: var(--gray-100) !important;
`

const getButtonSuccessStyle = css`
  background-color: var(--green-400) !important;
  color: var(--white) !important;
  border-color: var(--green-400) !important;
`

const getButtonDangerStyle = css`
  background-color: var(--red-400) !important;
  color: var(--white) !important;
  border-color: var(--red-400) !important;
`

const getButtonWarningStyle = css`
  color: var(--white) !important;
  background-color: var(--orange-400) !important;
  border-color: var(--orange-400) !important;
`

const getButtonInfoStyle = css`
  color: var(--white) !important;
  background-color: var(--indigo-400) !important;
  border-color: var(--indigo-400) !important;
`

const getButtonLinkStyle = css`
  box-shadow: none !important;
  color: var(--blue-400) !important;
`

const VonderButton = styled(AntdButton)<BaseButtonProps>`
  border-radius: var(--border-radius);
  background-color: ${(props: any) => props.bgcolor && props.bgcolor};
  width: ${(props) => props.width && props.width};
  font-weight: bold;
  box-shadow: var(--shadow-medium);
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 43px;
  color: var(--blue-400);
  font-size: ${(props) =>
    props.fontSize ? props.fontSize + 'px' : 'var(--font-16)'};
  cursor: pointer;
  margin: ${(props) => props.margin && props.margin};
  margin-top: ${(props) => props.margin_top && props.margin_top};
  margin-bottom: ${(props) => props.margin_bottom && props.margin_bottom};
  margin-left: ${(props) => props.margin_left && props.margin_left};
  margin-right: ${(props) => props.margin_right && props.margin_right};

  &:active {
    transform: scale(0.95);
  }

  ${(props) => {
    const size = props.size
    if (size === 'small') {
      return css`
        min-height: 35px;
      `
    } else if (size === 'middle') {
      return css`
        min-height: 43px;
      `
    } else if (size === 'large') {
      return css`
        min-height: 51px;
      `
    }
    return null
  }}

  &:hover ,&:focus {
    opacity: 0.9;
  }
  ${(props: any) => {
    const type = props.type
    const theme_color = props.theme_color
    if (type === 'default') {
      return css`
        border: 2px solid ${theme_color || 'var(--blue-400)'} !important;
        color: ${theme_color || 'var(--blue-400)'} !important;
        background-color: var(--white) !important; 
        &:hover {
          border: ${theme_color || 'var(--blue-400)'} !important
          color: ${theme_color || 'var(--blue-400)'} !important
          background-color: var(--white) !important;
        }
        &:focus {
          border: ${theme_color || 'var(--blue-400)'} !important
          color: ${theme_color || 'var(--blue-400)'} !important
          background-color: var(--white) !important;
        }
      `
    }

    if (type === 'primary') {
      return css`
        ${getButtonPrimaryStyle};
        &:hover,
        &:focus {
          ${getButtonPrimaryStyle}
        }
      `
    }

    if (type === 'secondary') {
      return css`
        ${getButtonSecondaryStyle};
        &:hover,
        &:focus {
          ${getButtonSecondaryStyle}
        }
      `
    }

    if (type === 'danger') {
      return css`
        ${getButtonDangerStyle};
        &:hover,
        &:focus {
          ${getButtonDangerStyle}
        }
      `
    }

    if (type === 'warning') {
      return css`
        ${getButtonWarningStyle}
        &:hover,
        &:focus {
          ${getButtonWarningStyle}
        }
      `
    }

    if (type === 'success') {
      return css`
        ${getButtonSuccessStyle};
        &:hover,
        &:focus {
          ${getButtonSuccessStyle}
        }
      `
    }

    if (type === 'info') {
      return css`
        ${getButtonInfoStyle}
        &:hover,
        &:focus {
          ${getButtonInfowStyle}
        }
      `
    }

    if (type === 'link') {
      return css`
        ${getButtonLinkStyle}
        &:hover,
        &:focus {
          ${getButtonLinkStyle}
        }
      `
    }
    return null
  }}
`

const Button: React.FC<any> = (props) => {
  return <VonderButton {...props}>{props.children}</VonderButton>
}

export default Button
