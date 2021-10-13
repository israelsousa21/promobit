import { FaSun } from 'react-icons/fa';
import { FaMoon } from 'react-icons/fa';
import Image from 'next/image';
import LogoPromobit from '../../public/logo-tmdb.svg';
import { Section, 
         Blurbar, 
         Content, 
         Logo, 
         ToggleButton 
        } from './TopBar.elements' 

function TopBar(props){
    
    return (
            <Section>
                <Blurbar dark={props.dark} />
                    <Content>
                        <Logo dark={props.dark}>
                            <Image src={LogoPromobit} alt="Logo Promobit" height={65} />
                        </Logo>
                        <ToggleButton onClick={props.toggle}>
                            { props.dark ? <FaSun color={'#fff'} size={20} /> : <FaMoon color={'#000'} size={20} /> }
                        </ToggleButton>
                    </Content>
            </Section>
    )
}

export default TopBar;