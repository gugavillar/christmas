import { FiFacebook, FiInstagram, FiLinkedin, FiTwitter, FiYoutube } from 'react-icons/fi'

import { Button } from '../components/Button/Button'
import { Heading } from '../components/Heading/Heading'
import { ListContainer } from '../components/ListContainer/ListContainer'
import { ListItem } from '../components/ListItem/ListItem'
import { Navbar } from '../components/Navbar/Navbar'
import { Text } from '../components/Text/Text'
import { Wrapper } from '../components/Wrapper/Wrapper'
import { theme } from '../styles/ProviderTheme'

function Home() {
  return (
    <>
      <Wrapper as='section' py={20} px={112} bg={theme.colors.pink}>
        <Navbar maxWidth={1200} mx='auto' display='flex' alignContent='center' justifyContent='space-between'>
          <Wrapper display='flex' alignContent='center' height='100%'>
            <img src='../../assets/images/santa.svg' alt='Santa Claus' />
            <Heading fontSize={24} lineHeight='36px' fontWeight={500} ml={12} color={theme.colors.backlight}>
              Feliz Natal
            </Heading>
          </Wrapper>
          <ListContainer>
            <ListItem href='/'>Início</ListItem>
            <ListItem href='#accessories'>Acessórios</ListItem>
            <ListItem href='#donation'>Doação</ListItem>
            <ListItem href='#contact'>Contato</ListItem>
          </ListContainer>
        </Navbar>
        <Wrapper
          as='section'
          maxWidth={1200}
          mx='auto'
          display='flex'
          alignItems='center'
          mt={75}
          justifyContent='space-between'
        >
          <Wrapper width={488} display='flex' alignContent='center' flexDirection='column'>
            <Heading fontSize={48} lineHeight='52px'>
              Feliz Natal e <br /> Feliz Ano Novo!
            </Heading>
            <Text mt={24} fontWeight={500}>
              Nessas festas de fim de ano mande um presente para <br /> a pessoa amada e compartilhe a alegria do Natal.
            </Text>
            <Button
              display='flex'
              alignItems='center'
              justifyContent='center'
              width={250}
              height={48}
              mt={40}
              color={theme.colors.white}
            >
              <img src='../../assets/images/gift.svg' alt='gift' />
              <Text ml={10} fontWeight={600} color={theme.colors.white}>
                Fazer uma doação
              </Text>
            </Button>
          </Wrapper>
          <Wrapper>
            <img src='../../assets/images/send.svg' alt='Present hand' />
          </Wrapper>
        </Wrapper>
      </Wrapper>
      <Wrapper as='section' py={20} px={112} mb={82} id='accessories'>
        <Wrapper display='flex' alignItems='center' flexDirection='column' justifyContent='center' mt={28}>
          <Heading lineHeight='72px' fontSize={48}>
            Acessórios
          </Heading>
          <Text width={477} textAlign='center' fontWeight={400}>
            Nessas festas de fim de ano mande um presente para a pessoa amada e compartilhe a alegria do Natal.
          </Text>
        </Wrapper>
        <Wrapper display='flex' alignItems='flex-start' justifyContent='space-around' mt={32}>
          <Wrapper display='flex' alignItems='center' justifyContent='center' flexDirection='column' width={200}>
            <img src='../../assets/images/gift-color.svg' alt='gift-color' />
            <Heading as='h4' fontSize={20} lineHeight='30px' fontWeight={500}>
              Presentes
            </Heading>
            <Text textAlign='center' color={theme.colors.gray}>
              Eles são os melhores presentes que existem.
            </Text>
          </Wrapper>
          <Wrapper display='flex' alignItems='center' justifyContent='center' flexDirection='column' width={200}>
            <img src='../../assets/images/bells.svg' alt='gift-color' />
            <Heading as='h4' fontSize={20} lineHeight='30px' fontWeight={500}>
              Enfeites
            </Heading>
            <Text textAlign='center' color={theme.colors.gray}>
              Dê uma decoração.
            </Text>
          </Wrapper>
          <Wrapper display='flex' alignItems='center' justifyContent='center' flexDirection='column' width={200}>
            <img src='../../assets/images/candy.svg' alt='gift-color' />
            <Heading as='h4' fontSize={20} lineHeight='30px' fontWeight={500}>
              Doces
            </Heading>
            <Text textAlign='center' color={theme.colors.gray}>
              Aproveite os doces natalinos.
            </Text>
          </Wrapper>
          <Wrapper display='flex' alignItems='center' justifyContent='center' flexDirection='column' width={200}>
            <img src='../../assets/images/socks.svg' alt='gift-color' />
            <Heading as='h4' fontSize={20} lineHeight='30px' fontWeight={500}>
              Muito amor
            </Heading>
            <Text textAlign='center' color={theme.colors.gray}>
              Aproveite os sentimentos que duram para sempre.
            </Text>
          </Wrapper>
        </Wrapper>
      </Wrapper>
      <Wrapper as='section' py={20} px={112} bg={theme.colors.pink} id='donation'>
        <Wrapper display='flex' alignItems='center' justifyContent='space-around'>
          <img src='../../assets/images/shared.svg' alt='Hands Gift' />
          <Wrapper display='flex' flexDirection='column' width={488}>
            <Heading fontSize={48} lineHeight='52px'>
              Comemore com <br /> muito amor!
            </Heading>
            <Text mt={24} fontWeight={500}>
              Nestes feriados, festeje com muito amor e paz, <br /> oferecendo muitas bênçãos aos nossos entes queridos,
              amigos e vizinhos, desejando-lhes um Feliz Natal.
            </Text>
            <Button
              display='flex'
              alignItems='center'
              justifyContent='center'
              width={208}
              height={48}
              mt={40}
              color={theme.colors.white}
            >
              <img src='../../assets/images/gift.svg' alt='gift' />
              <Text ml={10} fontWeight={600} color={theme.colors.white}>
                Fazer doação
              </Text>
            </Button>
          </Wrapper>
        </Wrapper>
      </Wrapper>
      <Wrapper as='section' py={20} px={112} height={140}>
        <Navbar
          maxWidth={1200}
          mx='auto'
          display='flex'
          alignItems='center'
          justifyContent='space-between'
          height='100%'
        >
          <Wrapper display='flex' alignItems='center'>
            <img src='../../assets/images/santa.svg' alt='Santa Claus' width={35} />
            <Heading fontSize={24} lineHeight='36px' fontWeight={500} ml={12} color={theme.colors.backlight}>
              Feliz Natal
            </Heading>
          </Wrapper>
          <ListContainer>
            <ListItem>
              <Wrapper
                borderRadius='50%'
                bg='rgba(218, 37, 53, 0.15)'
                width={40}
                height={40}
                display='flex'
                alignItems='center'
                justifyContent='center'
              >
                <FiTwitter color={theme.colors.red} size={24} />
              </Wrapper>
            </ListItem>
            <ListItem>
              <Wrapper
                borderRadius='50%'
                bg='rgba(218, 37, 53, 0.15)'
                width={40}
                height={40}
                display='flex'
                alignItems='center'
                justifyContent='center'
              >
                <FiYoutube color={theme.colors.red} size={24} />
              </Wrapper>
            </ListItem>
            <ListItem>
              <Wrapper
                borderRadius='50%'
                bg='rgba(218, 37, 53, 0.15)'
                width={40}
                height={40}
                display='flex'
                alignItems='center'
                justifyContent='center'
              >
                <FiLinkedin color={theme.colors.red} size={24} />
              </Wrapper>
            </ListItem>
            <ListItem>
              <Wrapper
                borderRadius='50%'
                bg='rgba(218, 37, 53, 0.15)'
                width={40}
                height={40}
                display='flex'
                alignItems='center'
                justifyContent='center'
              >
                <FiInstagram color={theme.colors.red} size={24} />
              </Wrapper>
            </ListItem>
            <ListItem>
              <Wrapper
                borderRadius='50%'
                bg='rgba(218, 37, 53, 0.15)'
                width={40}
                height={40}
                display='flex'
                alignItems='center'
                justifyContent='center'
              >
                <FiFacebook color={theme.colors.red} size={24} />
              </Wrapper>
            </ListItem>
          </ListContainer>
        </Navbar>
      </Wrapper>
    </>
  )
}

export { Home }
