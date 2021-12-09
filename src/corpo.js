export default function Corpo()
{
    let Stories = [
    {
        image: "assets/img/9gag.svg",
        name: "9gag"
    },
    {
        image: "assets/img/meowed.svg",
        name: "meowed"
    },
    {
        image: "assets/img/barked.svg",
        name: "barked"
    },
    {
        image: "assets/img/nathanwpylestrangeplanet.svg",
        name: "nathanwpylestrangeplanet"
    },
    {
        image: "aassets/img/wawawicomics.svg",
        name: "wawawicomics"
    },
    {
        image: "assets/img/respondeai.svg",
        name: "respondeai"
    },
    {
        image: "assets/img/filomoderna.svg",
        name: "filomoderna.svg"
    },
    {
        image: "assets/img/memeriagourmet.svg",
        name: "memeriagourmet"
    }
    ];

    let Posts = [
    {
        pfp: "assets/img/meowed.svg",
        username: "meowed",
        postimg: "assets/img/gato-telefone.svg",
        likesimg: "assets/img/respondeai.svg",
        likesname: "respondeai",
        likesothers: "outras 101.518 pessoas"
    },
    {
        pfp: "assets/img/barked.svg",
        username: "barked",
        postimg: "assets/img/dog.svg",
        likesimg: "assets/img/adorable_animals.svg",
        likesname: "adorable_animals",
        likesothers: "outras 99.159 pessoas"
    }
    ];

    let Suggestions = [
    {
        pfp: "assets/img/bad.vibes.memes.svg",
        username: "bad.vibes.memes",
        reason: "Segue você"
    },
    {
        pfp: "assets/img/chibirdart.svg",
        username: "chibidart",
        reason: "Segue você"
    },
    {
        pfp: "assets/img/razoesparaacreditar.svg",
        username: "razoesparaacreditar",
        reason: "Novo no Instagram"
    },
    {
        pfp: "assets/img/adorable_animals.svg",
        username: "adorable_animals",
        reason: "Segue você"
    },
    {
        pfp: "assets/img/smallcutecats.svg",
        username: "smallcutecats",
        reason: "Segue você"
    }
    ];

    let User = {
        pfp: "assets/img/catanacomics.svg",
        name: "catanacomics",
        subname: "Catana",
    };

    return (
    <div class="corpo">
        <div class="esquerda">
            <div class="stories">

                <ul>
			            {Stories.map(story => <Storia image={story.image} name={story.name}/>)}
		            </ul>

            <div class="setinha">
              <ion-icon name="chevron-forward-circle"></ion-icon>
            </div>
          </div>

          <div class="posts">

            <ul>
			        {Posts.map(Post => <Posta pfp={Post.pfp} username={Post.username} postimg={Post.postimg} likesimg={Post.likesimg} likesname={Post.likesname} likesothers={Post.likesothers}/>)}
		        </ul>
          </div>
        </div>

        <div class="sidebar">
          <div class="usuario">
            <img src={User.pfp} />
            <div class="texto">
              <strong>{User.name}</strong>
              {User.subname}
            </div>
          </div>

          <div class="sugestoes">
            <div class="titulo">
              Sugestões para você
              <div>Ver tudo</div>
            </div>

            <ul>
			        {Suggestions.map(suggestion => <Sugere pfp={suggestion.pfp} username={suggestion.username} reason={suggestion.reason}/>)}
		        </ul>

          </div>

          <div class="links">
            Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos • Localizações • Contas mais relevantes • Hashtags • Idioma
          </div>

          <div class="copyright">
            © 2021 INSTAGRAM DO FACEBOOK
          </div>
        </div>
    </div>
    );
}

function Posta(props)
{
  return(
  <li>{
    <div class="post">
    <div class="topo">
      <div class="usuario">
        <img src= {props.pfp} />
        {props.username}
      </div>
      <div class="acoes">
        <ion-icon name="ellipsis-horizontal"></ion-icon>
      </div>
    </div>

    <div class="conteudo">
      <img src={props.postimg}/>
    </div>

    <div class="fundo">
      <div class="acoes">
        <div>
          <ion-icon name="heart-outline"></ion-icon>
          <ion-icon name="chatbubble-outline"></ion-icon>
          <ion-icon name="paper-plane-outline"></ion-icon>
        </div>
        <div>
          <ion-icon name="bookmark-outline"></ion-icon>
        </div>
      </div>

      <div class="curtidas">
        <img src={props.likesimg} />
        <div class="texto">
          Curtido por <strong>{props.likesname}</strong> e <strong>{props.likesothers}</strong>
        </div>
      </div>
    </div>
  </div>}</li>)
};

function Sugere(props)
{
  return(
  <li>{
    <div class="sugestao">
    <div class="usuario">
      <img src={props.pfp} />
      <div class="texto">
        <div class="nome">{props.username}</div>
        <div class="razao">{props.reason}</div>
      </div>
    </div>

    <div class="seguir">Seguir</div>
  </div>}</li>)
};

function Storia(props)
{
  return(
    <li>{
      <div class="story">
          <div class="imagem">
              <img src = {props.image} />
          </div>
          <div class="usuario">
              {props.name}
          </div>
      </div>}</li>

  )
};