Rails.application.routes.draw do
  root "todos#index"
  get "todos/all_todos"
  put "todos/update"
end
