ExUnit.start

Mix.Task.run "ecto.create", ~w(-r PhoenixReduxBlog.Repo --quiet)
Mix.Task.run "ecto.migrate", ~w(-r PhoenixReduxBlog.Repo --quiet)
Ecto.Adapters.SQL.begin_test_transaction(PhoenixReduxBlog.Repo)

