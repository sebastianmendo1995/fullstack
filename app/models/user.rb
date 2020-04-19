class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
    devise :database_authenticatable, :registerable, :recoverable, :rememberable, :trackable, :validatable
    devise :confirmable
    devise :omniauthable, :omniauth_providers => [:facebook]
    # attr_accessible :email, :name, :password, :password_confirmation, :remember_me
    
    attr_reader :password

    validates :email, presence: true, uniqueness: true
    validates :first_name, :last_name, presence: true
    validates :password_digest, :session_token, presence: true
    validates :password, length: { minimum: 6 }, allow_nil: true

    before_validation :ensure_session_token

    has_many :authorizations, :dependent => :destroy
    has_one_attached :photo
    has_many :reviews

    has_many :spaces,
        primary_key: :id,
        foreign_key: :host_id,
        class_name: :Space

    def self.find_by_credentials(email, password)
        user = User.find_by(email: email)
        return nil unless user
        user.is_password?(password) ? user : nil
    end

    def password=(password)
        @password = password
        self.password_digest = BCrypt::Password.create(password)
    end

    def is_password?(password)
        BCrypt::Password.new(self.password_digest).is_password?(password)
    end

    def ensure_session_token
        self.session_token ||= SecureRandom.urlsafe_base64
    end

    def reset_session_token!
        self.session_token = SecureRandom.urlsafe_base64
        self.save
        self.session_token
    end

    def self.find_or_create_by_facebook_oauth(auth)
     user = User.where(:provider => auth.provider, :uid => auth.uid).first

     unless user
        user = User.create!(
            provider: auth.provider,
            uid: auth.uid,
            email: auth.info.email,
            password: Devise.friendly_token[0,20]
        )
     end

    user
  end
end
