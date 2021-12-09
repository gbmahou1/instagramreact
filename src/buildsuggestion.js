export function BuildSuggestion(props)
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