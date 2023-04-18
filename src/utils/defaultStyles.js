import styled from "styled-components";
import { colors } from "../utils/theme";

export const Button = styled.button`
    display: inline-block;
    width: 150px;
    line-height: 48px;
    font-size: 16px;
    background-color: ${colors.bgPrimary};
    color: ${colors.textPrimary};
    border-radius: 30px;
    font-weight: 500;
    text-align: center;
    text-decoration: none;
    text-transform: uppercase;
    transition: all 0.3s ease-out;
    border:1px solid ${colors.bgSecondary};
    &:hover {
        box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
        cursor: pointer;
    }
    ${ (props) => props.secondary &&
    `
        background-color: ${colors.bgSecondary};
        color: ${colors.textSecondary};
    `
    }
`;

export const MessageInput = styled.input`
    padding:0 15px;
    line-height:40px;
    border:2px solid ${colors.textPrimary};
    border-radius:6px;
    font-size:14px;
    width: 80%;
`;

// HEADER DEFINITIONS
export const HeaderWrapper = styled.header`
    position: relative;
    width: 100%;
    padding: 24px;
    background-color: ${colors.bgSecondary};
    color:${colors.textPrimary};
    border-bottom:2px solid ${colors.bgSecondary};
    ${ (props) => props.isSecondary &&
    `
        color:${colors.textSecondary};
        background-color: ${colors.bgSecondary};
        border-bottom:2px solid ${colors.bgPrimary};
    `
    }
`;

export const HeaderInner = styled.div`
    width:100%;
    text-align: center;
`;
// WRAPPER FOR MAIN PAGE AND IFRAME
export const AppWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    width:100%;
    height:100vh;
`;

export const LogInWrapper = styled.div`
    width:100%;
    height:100%;
    position: relative;
`;

// FOOTER DEFINITIONS
export const FooterWrapper = styled.footer`
    position: absolute;
    bottom:0px;
    width: 100%;
    background-color: ${colors.bgSecondary};
    color:${colors.textPrimary};
    border-top:2px solid ${colors.bgSecondary};
    display:flex;
    justify-content: space-evenly;
    padding:4px;
    ${ (props) => props.isSecondary &&
    `
        color:${colors.textSecondary};
        background-color: ${colors.bgSecondary};
        border-top:2px solid ${colors.bgPrimary};
    `
    }
`;
// WRAPPER FOR MESSAGES CONTENTS
export const MainWrapper = styled.div`
    width:100%;
    height:calc(100vh - 110px);
    overflow: scroll;
    position: relative;
    background-color: ${colors.bgPrimary};
    margin: 0 auto;
    ${ (props) => props.isSecondary &&    `
      background-color: ${colors.bgSecondary};
      color: ${colors.textSecondary};
    `
    }
`;

// WRAPPER FOR MESSAGES
export const MessageDiv = styled.div`
    width:auto;
    padding:12px;
    position:relative;
    display: flex;
    ${ (props) => props.usersMessage &&    `
        justify-content: flex-end;
    `
    }
    ${ (props) => props.notUsersMessage &&    `
        justify-content: flex-start;
    `
    }
`;
export const MessageDivContent = styled.div`
    padding:12px;
    border-radius:12px;
    top:0px;
    font-family: monserrat;
      ${ (props) => props.color &&    `
      background-color: ${props.color};
      color: ${colors.textSecondary};
      `
      }
`;