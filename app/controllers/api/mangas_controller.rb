class Api::MangasController < ApplicationController
  before_action :set_manga, only: [:show, :edit, :update, :destroy]





  def index
    @mangas = Manga.all
    render :json => @mangas
  end

  def show
    render :json => @manga
  end

  def create
    @manga = Manga.new(manga_params)
    @manga.save
    render :json => @manga
  end

  def update
    @manga.update(manga_params)
    render :json => @manga
  end

  def destroy
    @manga.destroy
    render :jason => {state: "completado"}
  end


  private
    # Use callbacks to share common setup or constraints between actions.
    def set_manga
      @manga = Manga.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def manga_params
      params.require(:manga).permit(:nombre)
    end
end
