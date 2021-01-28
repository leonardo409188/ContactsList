import styled, { css } from 'styled-components/native';
import Icon from 'react-native-vector-icons/MaterialIcons';

export const Container = styled.View`
	flex: 1;
	padding: 5px 15px;
	background-color: #fff;
`

export const TitleView = styled.View`
	margin: 20px 0px;
`

export const Title = styled.Text`
	font-size: 36px;
	align-self: center;
	color: #999FAE;
`

export const SubTitle = styled.Text`
	font-size: 28px;
	color: #999FAE;
`

export const Separator = styled.View`
	border-bottom-width: .2px;
	border-bottom-color: #999FAE;
	margin: 0px 10px;
`

export const Input = styled.TextInput`
	height: 55px;
	border-radius: 15px;
	border-color: #AEAEAE;
	border-width: .8px;
	margin: 15px 0px;
	padding: 0px 20px;
	color: #6C6D71;
	font-size: 16px;
`

export const InputsView = styled.View`
	margin-top: 15px;
`

export const CitySelect = styled.TouchableOpacity`
	height: 55px;
	border-radius: 15px;
	border-color: #AEAEAE;
	border-width: .8px;
	margin: 15px 0px;
	padding: 0px 20px;
	justify-content: space-between;
	align-items: center;
	flex-direction: row;
`

export const CityName = styled.Text`
	color: #AEAEAE;
`

export const SelectIcon = styled(Icon).attrs({
	name: 'keyboard-arrow-down',
	size: 22,
	color: "#999FAE"
})``

export const ButtonsView = styled.View`
	flex: 1;
	margin-top: 50px;
`

export const Button = styled.TouchableOpacity`
	margin-top: 20px;
	width: 100%;
	background-color: #7C37A6;
	color: #fff;
	height: 55px;
	border-radius: 15px;
	justify-content: center;
	align-items: center;

	${props => props.bordered && css`
		background-color: #fff;
		color: #7C37A6
		border-color: #7C37A6;
		border-width: 1.5px;
	`}

	${props => props.disabled && css`
		background-color: #E6E7E8;
	`}
`

export const ButtonText = styled.Text`
	color:  ${props => props.bordered ? '#7C37A6' : props.disabled ? 'gray' :  '#fff'};
	font-weight: bold;
	font-size: 16px;
`