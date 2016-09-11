var Projects = React.createClass({
  render: function () {
    return (
      <div>
        <div className='jumbotron'>
          <div className='container text-center'>
            <h1>Projects</h1>
            <p>This page contains links to my projects on github</p>
          </div>
        </div>
        <div id='Rows'>
          <Row1 />
          <Row2 />
        </div>
        <br />
        <br />
      </div>
      );
  }
})

var Project = React.createClass({
  render: function() {
    return (
      <div className='col-sm-3'>
        <p>{this.props.name}</p>
        <a href={this.props.link}><img src={this.props.image} className='img-responsive' style={{width: '100%'}} alt='Image' /></a>
      </div>
    )
  }
});

var Row1 = React.createClass({
  render: function() {
    return (
      <div className='container-fluid bg-3 text-center'>
        <br />
        <div className='row'>
          <Project name='Empty' link='#' image='http://placehold.it/150x80?text=IMAGE' />
          <Project name='Empty' link='#' image='http://placehold.it/150x80?text=IMAGE' />
          <Project name='Empty' link='#' image='http://placehold.it/150x80?text=IMAGE' />
          <Project name='Empty' link='#' image='http://placehold.it/150x80?text=IMAGE' />
        </div>
      </div>
    )
  }
});

var Row2 = React.createClass({
  render: function() {
    return (
      <div className='container-fluid bg-3 text-center'>
        <br />
        <div className='row'>
          <Project name='Empty' link='#' image='http://placehold.it/150x80?text=IMAGE' />
          <Project name='Empty' link='#' image='http://placehold.it/150x80?text=IMAGE' />
          <Project name='Empty' link='#' image='http://placehold.it/150x80?text=IMAGE' />
          <Project name='Empty' link='#' image='http://placehold.it/150x80?text=IMAGE' />
        </div>
      </div>
    )
  }
});
module.exports = Projects;
