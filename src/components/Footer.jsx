import {
  Facebook,
  Instagram,
  MailOutline,
  Phone,
  Pinterest,
  Room,
  Twitter,
} from "@mui/icons-material";
import { styled } from "styled-components";
import { mobile } from "../responsive";

const Container = styled.div`
  display: flex;
  ${mobile({
    flexDirection: "column",
  })}
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

const Logo = styled.h1``;

const Desc = styled.p`
  margin: 20px 0;
`;

const SocialContainer = styled.div`
  display: flex;
`;

const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: white;
  background-color: #${(props) => props.color};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
  cursor: pointer;
`;

const Center = styled.div`
  flex: 1;
  padding: 20px;
  ${mobile({
    display: "none",
  })}
`;

const Title = styled.h3`
  margin-bottom: 30px;
`;

const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;

const ListItem = styled.li`
  width: 50%;
  margin-bottom: 10px;
  cursor: pointer;
`;

const Right = styled.div`
  flex: 1;
  padding: 20px;
  ${mobile({
    backgroundColor: "#f1f1f1",
  })}
`;

const ContactItem = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
`;

const Payment = styled.img`
width: 50%;
`;

const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>LOOK.</Logo>
        <Desc>
          LOOK Group is a family of brands and businesses, making it possible
          for customers around the world to express themselves through fashion
          and design, and to choose a more sustainable lifestyle.{" "}
        </Desc>
        <SocialContainer>
          <SocialIcon color="3B5999">
            <Facebook />
          </SocialIcon>

          <SocialIcon color="E4405F">
            <Instagram />
          </SocialIcon>

          <SocialIcon color="55ACEE">
            <Twitter />
          </SocialIcon>

          <SocialIcon color="E60023">
            <Pinterest />
          </SocialIcon>
        </SocialContainer>
      </Left>

      <Center>
        <Title>USEFUL LINKS</Title>
        <List>
          <ListItem>Home</ListItem>
          <ListItem>Cart</ListItem>
          <ListItem>Men</ListItem>
          <ListItem>Women</ListItem>
          <ListItem>Accessories</ListItem>
          <ListItem>Account</ListItem>
          <ListItem>Orders</ListItem>
          <ListItem>Wishlist</ListItem>
          <ListItem>Terms</ListItem>
        </List>
      </Center>

      <Right>
        <Title>CONTACT</Title>
        <ContactItem>
          <Room style={{marginRight: "10px"}}/> 622 Dixie Path, South Tobinchester 98369
        </ContactItem>
        <ContactItem>
          <Phone style={{marginRight: "10px"}}/> +1 234 56789
        </ContactItem>
        <ContactItem>
          <MailOutline style={{marginRight: "10px"}}/> contact@look.com
        </ContactItem>
        <Payment src="https://the-lama-shop.vercel.app/_next/image?url=https%3A%2F%2Fi.ibb.co%2FQfvn4z6%2Fpayment.png&w=1920&q=75" />
      </Right>
    </Container>
  );
};

export default Footer;
