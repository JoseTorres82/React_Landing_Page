import { styled } from "styled-components";
import { motion } from "framer-motion";

export const StyledButton = styled(motion.button)`
	padding: 0.8rem 1.5rem;
	outline: none;
	border: none;
	border-radius: ${({ radius }) => `${radius}px`};
/* 	background: var(--btn-gradient); */
	color: white;
	text-transform: uppercase;
	font-weight: 400;
	right: 0;
	cursor: pointer;
	&:hover {
		opacity: 95%;
		color:#131415;
	}
	&:disabled {
		cursor: not-allowed;
		opacity: 0.5;
	}
`;
