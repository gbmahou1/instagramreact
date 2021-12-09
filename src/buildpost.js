export function BuildPost(props)
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