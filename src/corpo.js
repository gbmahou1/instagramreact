import {BuildPost} from './buildpost';
import {BuildSuggestion} from './buildsuggestion';
import {BuildStory} from './buildstory';



export default function Corpo()
{
    let stories = [
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

    let posts = [
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

    let suggestions = [
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

    let user = {
        pfp: "assets/img/catanacomics.svg",
        name: "catanacomics",
        subname: "Catana",
    };

    return (
    <div class="corpo">
        <div class="esquerda">
            <div class="stories">

                <ul>
			            {stories.map(story => <BuildStory image={story.image} name={story.name}/>)}
		            </ul>

            <div class="setinha">
              <ion-icon name="chevron-forward-circle"></ion-icon>
            </div>
          </div>

          <div class="posts">

            <ul>
			        {posts.map(post => <BuildPost pfp={post.pfp} username={post.username} postimg={post.postimg} likesimg={post.likesimg} likesname={post.likesname} likesothers={post.likesothers}/>)}
		        </ul>
          </div>
        </div>

        <div class="sidebar">
          <div class="usuario">
            <img src={user.pfp} />
            <div class="texto">
              <strong>{user.name}</strong>
              {user.subname}
            </div>
          </div>

          <div class="sugestoes">
            <div class="titulo">
              Sugestões para você
              <div>Ver tudo</div>
            </div>

            <ul>
			        {suggestions.map(suggestion => <BuildSuggestion pfp={suggestion.pfp} username={suggestion.username} reason={suggestion.reason}/>)}
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

