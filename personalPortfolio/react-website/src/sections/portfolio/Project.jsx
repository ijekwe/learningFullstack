import Card from '../../components/Card'


const Project = ({project}) => {
  return (
    <Card className="portfolio__project">
        <h4>{project.title}</h4>
        <p>{project.desc}</p>
    </Card>
  )
}

export default Project