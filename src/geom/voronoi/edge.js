function d3_geom_voronoiEdge(lSite, rSite) {
  this.l = lSite;
  this.r = rSite;
  this.a = this.b = null; // for border edges
}

function d3_geom_voronoiCreateEdge(lSite, rSite, va, vb) {
  var edge = new d3_geom_voronoiEdge(lSite, rSite);
  d3_geom_voronoiEdges.push(edge);
  if (va) d3_geom_voronoiSetEdgeStartpoint(edge, lSite, rSite, va);
  if (vb) d3_geom_voronoiSetEdgeEndpoint(edge, lSite, rSite, vb);
  d3_geom_voronoiCells[lSite.i].halfEdges.push(new d3_geom_voronoiHalfEdge(edge, lSite, rSite));
  d3_geom_voronoiCells[rSite.i].halfEdges.push(new d3_geom_voronoiHalfEdge(edge, rSite, lSite));
  return edge;
}

function d3_geom_voronoiCreateBorderEdge(lSite, va, vb) {
  var edge = new d3_geom_voronoiEdge(lSite, null);
  edge.a = va;
  edge.b = vb;
  d3_geom_voronoiEdges.push(edge);
  return edge;
}

function d3_geom_voronoiSetEdgeStartpoint(edge, lSite, rSite, vertex) {
  if (!edge.a && !edge.b) {
    edge.a = vertex;
    edge.l = lSite;
    edge.r = rSite;
  } else if (edge.l === rSite) {
    edge.b = vertex;
  } else {
    edge.a = vertex;
  }
}

function d3_geom_voronoiSetEdgeEndpoint(edge, lSite, rSite, vertex) {
  d3_geom_voronoiSetEdgeStartpoint(edge, rSite, lSite, vertex);
}