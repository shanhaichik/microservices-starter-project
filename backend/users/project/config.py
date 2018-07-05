class BaseConfig:
    """Base configuration"""
    TESTING = False

class DevConfig(BaseConfig):
    """Development configuration"""
    pass

class TestConfig(BaseConfig):
    """Testing configuration"""
    TESTING = True

class ProdConfig(BaseConfig):
    """Production configuration"""
    pass
