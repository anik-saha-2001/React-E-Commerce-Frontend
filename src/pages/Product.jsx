import Navbar from "../components/Navbar";
import Announcement from "../components/Announcement";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import { Add, Remove, ShoppingBagOutlined } from "@mui/icons-material";
import {
  AddContainer,
  Amount,
  AmountContainer,
  Button,
  Container,
  Desc,
  Filter,
  FilterColor,
  FilterContainer,
  FilterSize,
  FilterSizeOption,
  FilterTitle,
  Image,
  ImgContainer,
  InfoContainer,
  Price,
  Text,
  Title,
  Wrapper,
} from "../styled/product-style";

const Product = () => {
  return (
    <Container>
      <Navbar />
      <Announcement />
      <Wrapper>
        {" "}
        <ImgContainer>
          <Image src="https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F7b%2F4b%2F7b4b21e7f0ffbe86ed6b94dff22a6fa6f2c10842.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]" />
        </ImgContainer>
        <InfoContainer>
          <Title>Bouclé skirt</Title>
          <Desc>
            Short skirt in a bouclé weave. Regular waist with concealed
            elastication, concealed zip and button at the back and a gently
            flared hem. Jersey lining.
          </Desc>
          <Price>$ 200</Price>
          <FilterContainer>
            <Filter>
              <FilterTitle>Color:</FilterTitle>
              <FilterColor color="black" />
              <FilterColor color="tan" />
              <FilterColor color="gray" />
            </Filter>
            <Filter>
              <FilterTitle>Size:</FilterTitle>
              <FilterSize>
                <FilterSizeOption>XS</FilterSizeOption>
                <FilterSizeOption>S</FilterSizeOption>
                <FilterSizeOption>M</FilterSizeOption>
                <FilterSizeOption>L</FilterSizeOption>
                <FilterSizeOption>XL</FilterSizeOption>
                <FilterSizeOption>XXL</FilterSizeOption>
              </FilterSize>
            </Filter>
          </FilterContainer>
          <AddContainer>
            <AmountContainer>
              <Add />
              <Amount>1</Amount>
              <Remove />
            </AmountContainer>
            <Button>
              <ShoppingBagOutlined />
              <Text>ADD</Text>
            </Button>
          </AddContainer>
        </InfoContainer>
      </Wrapper>
      <Newsletter />
      <Footer />
    </Container>
  );
};

export default Product;
