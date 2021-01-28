import styled, { css } from 'styled-components/native';
import Icon from 'react-native-vector-icons/FontAwesome';

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
	font-family: 'Leitura News';
	align-self: center;
	color: #999FAE;
`

export const Separator = styled.View`
	border-bottom-width: .2px;
	border-bottom-color: #999FAE;
	margin: 0px 10px;
`

export const ScrollView = styled.View`
	padding-bottom: 100px;
	flex: 1;
`

export const Scroll = styled.ScrollView`
	padding-top: 20px;
	padding-bottom: 50px;
`

export const TextWithoutContact = styled.Text`
	align-self: center;
	margin-top: 20px;
	color: gray;
	font-size: 24px;
`

export const ButtonView = styled.View`
	position: absolute;
	bottom: 20px;
	right: 20px;
	width: 70px;
	height: 70px;
	border-radius: 70px;
	align-items: center;
	justify-content: center;
	background-color: #fff;
`

export const Button = styled.TouchableOpacity`
	width: 60px;
	height: 60px;
	border-radius: 60px;
	background-color: #7C37A6;
	align-items: center;
	justify-content: center;
`

export const List = styled.View`
	display: flex;
	flex-direction: row;
	align-items: center;
	padding: 20px 0px;
	border-bottom-width: .8px;
	border-bottom-color: #DEDFE0;
	justify-content: space-between;
`

export const NameView = styled.View`
	display: flex;
	flex-direction: row;
	align-items: center;
`

export const PhotoView = styled.Image.attrs({
	source: require('../../assets/images/userProfile.png'),
})`
	width: 40px;
	height: 40px;
	border-radius: 40px;
	margin-right: 10px;
`
export const InfosView = styled.View``     

export const TextName = styled.Text`
	font-size: 16px;
	color: #3D3F3A;
`

export const TextPhone = styled.Text`
	font-size: 14px;
	color: gray;
`

export const ListIcon = styled(Icon).attrs(props => ({
	name: props.type, 
	size: 22, 
	color:  props.type == 'trash' ? '#F63737' : "#999FAE" 
}))`
	margin: 0px 10px;
`

export const ButtonIcon = styled(Icon).attrs({
	name: 'plus', 
	size: 22, 
	color: '#fff' 
})``

export const OptionsView = styled.View`
	display: flex;
	flex-direction: row;
	align-items: center;
`

export const OptionButton = styled.TouchableOpacity`
	padding: 0px 3px;
`

export const Modal = styled.Modal.attrs({
	animationType: "slide",
})``

export const ModalView = styled.View`
	height: 30%;
	padding: 20px;
	margin-top: auto;
	background-color: #fff;
	border-top-left-radius: 15px;
	border-top-right-radius: 15px;
	align-items: center;
`

export const CenteredView = styled.View`
	flex: 1;
	background-color: rgba(0,0,0,0.6);
`

export const ModalTitle = styled.Text`
	align-self: center;
	font-size: 26px;
	color: gray;
	margin-bottom: 20px;
`

export const ModalSubtitle = styled.Text`
	align-self: center;
	font-size: 18px;
	color: gray;
`

export const ButtonsView = styled.View`
	flex-direction: row;
	align-items: center;
	justify-content: center;
	position: absolute;
	bottom: 25px;
`

export const ModalButton = styled.TouchableOpacity`
	height: 45px;
	border-color: gray;
	background-color: #a8a8a8;
	margin: 0px 10px;
	align-items: center;
	justify-content: center;
	border-radius: 12px;
	flex: 1;

	${props => props.delete && css`
		background-color: #F15E5E;
		border-width: 0px;
	`}
`

export const ButtonText = styled.Text`
	font-size: 19px;
	color: #fff;

	${props => props.delete && css`
		color: white;
	`}
`
    