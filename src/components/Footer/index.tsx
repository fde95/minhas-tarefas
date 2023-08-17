import * as S from './styles'

const Footer = () => (
  <>
    <S.Footer>
      <p>
        2023 © criado e desenvolvido por
        <S.Link
          href="https://www.linkedin.com/in/fde95/"
          target="_blank"
          title="Conheça o Dev"
        >
          {' Felipe Espinoza'}
        </S.Link>
      </p>
      <S.Social>
        <li>
          <S.SocialItem
            href="https://www.instagram.com/fde.95/"
            target="_blank"
            title="Instagram"
          >
            <i className="bi bi-instagram"></i>
          </S.SocialItem>
        </li>
        <li>
          <S.SocialItem
            href="https://www.linkedin.com/in/fde95/"
            target="_blank"
            title="LinkedIn"
          >
            <i className="bi bi-linkedin"></i>
          </S.SocialItem>
        </li>
        <li>
          <S.SocialItem
            href="https://github.com/fde95"
            target="_blank"
            title="GitHub"
          >
            <i className="bi bi-github"></i>
          </S.SocialItem>
        </li>
      </S.Social>
    </S.Footer>
  </>
)

export default Footer
