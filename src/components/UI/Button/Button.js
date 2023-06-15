import styled, { css } from "styled-components";

const Button = styled.button`
    padding: 0.8rem 2rem;
    border: none;
    border-radius: 10px;
    color: #fff;
    cursor: pointer;

    background-color: ${(props) => {
        if (props.variant) {
            return props.theme.colors[props.variant];
        } else {
            return props.theme.colors["primary"];
        }
        }};
    
    ${(props) => props.full && css`
        display: block;
        width: 100%;
    `}

    ${(props)=> {
        if (props.size) {
            return props.theme.sizes[props.size];
        } else {
            return props.theme.sizes["md"];
        }
    }}

`;

export default Button;