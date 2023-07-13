import {
    LinksWrapper,
    Links,
    GoodLinks
} from './styled';

import {AllLinks, Link} from './AllLinks';

const FooterLinks: React.FC = () => {
    return (
        <>
            {AllLinks.map((link, index) => (
                <LinksWrapper key={index}>
                    {link.map((el, index) => (
                        <Links key={index + el.name}>
                            {el.name}
                        </Links>
                     ))}
                </LinksWrapper>
            ))}
        </>
    );
}

export default FooterLinks;