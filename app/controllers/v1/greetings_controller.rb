module V1
  # GreetingsController
  class GreetingsController < ApplicationController
    def index
      greetings = Greeting.all
      render json: greetings[rand(5)]
    end
  end
end
