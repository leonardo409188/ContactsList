import styled from 'styled-components/native';

export const Container = styled.View`
	flex: 1;
	align-items: center;
	justify-content: center;
	background-color: #FDFA6D;
`

export const LogoImage = styled.Image.attrs({
	source: require('../../assets/images/logo.png'),
})`
	width: 250px;
	height: 250px;
`
