
import enum

class _runtime_version:
    class Domain(enum.Enum):
        PUBLIC = "public"

    @classmethod
    def ValidateProtobufRuntimeVersion(self, *version_info):
        ...