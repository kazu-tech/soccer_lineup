class PostsController < ApplicationController
  def index
    @posts = Post.all
  end

  def new
    @post = Post.new
  end

  def create
    @post = Post.find(post_params)
  end

  private
  def post_params
    params.require(:post).permit(:date, :match, :result, :formation, :num11, :num10, :num9, :num8, :num7, :num6, :num5, :num4, :num3, :num2, :num1,)
  end
end
