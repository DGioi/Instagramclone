class ApplicationController < ActionController::Base
	before_action :configure_permitted_parameters, if: :devise_controller?

  protected

  def after_sign_out_path_for(resource_or_scope)
    new_user_session_path
  end
  def after_sign_up_path_for(resource)
    new_user_session_path
  end
  def configure_permitted_parameters
    devise_parameter_sanitizer.permit(:sign_up, keys: [:username, :phone_number, :full_name])
  end
end
