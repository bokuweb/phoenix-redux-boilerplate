defmodule PhoenixReduxBlog.PageController do
  use PhoenixReduxBlog.Web, :controller

  def index(conn, _params) do
    render conn, "index.html"
  end
end
