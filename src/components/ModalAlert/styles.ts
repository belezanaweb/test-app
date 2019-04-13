import styled from 'styled-components/native'

export const Container = styled.Modal`

`
export const Block = styled.View`
    flex: 1;
    background-color: rgba(0,0,0,0.5);
    align-items: center;
    justify-content: center;
`
export const Content = styled.View`
    background-color: ${props => props.theme.backgroundPrimary};
    padding: 20px;
    width: 90%;
`

export const Header = styled.View`
    flex-direction: row;
    justify-content: space-between;
    padding: 0 5px;
`

export const Title = styled.Text`
    font-size: 16px;
    font-weight: bold;
    color: ${props => props.theme.black};
`

export const ButtonClose = styled.TouchableHighlight`

`
export const ButtonCloseText = styled.Text`
    font-size: 22px;
    font-weight: bold;
    color: ${props => props.theme.black};
`


export const Input = styled.TextInput`
    background-color: ${props => props.theme.backgroundPrimary};
    border-bottom-width: 1px;
    border-bottom-color: ${props => props.theme.grayLight};
    color: ${props => props.theme.black};
    margin-bottom: 10px;
`
