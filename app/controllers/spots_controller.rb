class SpotsController < ApplicationController
  respond_to :json
  def index
    respond_to do |format|
      format.json { render json: Spot.all }
      format.html
    end
  end

  def create
    respond_with Spot.create(spot_params)
  end

  def destroy
    respond_with Spot.destroy(params[:id])
  end

private
  def spot_params
    params.require(:spot).permit(:title, :description, :length, :width, :depth, :land)
  end
end
