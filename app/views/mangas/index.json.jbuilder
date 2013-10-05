json.array!(@mangas) do |manga|
  json.extract! manga, :nombre
  json.url manga_url(manga, format: :json)
end
