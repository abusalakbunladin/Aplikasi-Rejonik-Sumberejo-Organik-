"""rename tabel pemasuk jadi pemasok

Revision ID: a756767ed2c1
Revises: 05d2c7bb1ab8
Create Date: 2026-09-14 00:00:00.000000

"""
from typing import Sequence, Union

from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision: str = 'a756767ed2c1'
down_revision: Union[str, Sequence[str], None] = '05d2c7bb1ab8'
branch_labels: Union[str, Sequence[str], None] = None
depends_on: Union[str, Sequence[str], None] = None


def upgrade() -> None:
    """Upgrade schema."""
    # Nama tabel aslinya kepeleset jadi "pemasuk" (seharusnya "pemasok").
    # MySQL/InnoDB otomatis update foreign key yang menunjuk ke tabel ini
    # begitu tabelnya di-rename, jadi kolom pasokan.pemasok_id tetap aman.
    op.rename_table('pemasuk', 'pemasok')
    op.drop_index(op.f('ix_pemasuk_id'), table_name='pemasok')
    op.create_index(op.f('ix_pemasok_id'), 'pemasok', ['id'], unique=False)


def downgrade() -> None:
    """Downgrade schema."""
    op.drop_index(op.f('ix_pemasok_id'), table_name='pemasok')
    op.create_index(op.f('ix_pemasuk_id'), 'pemasok', ['id'], unique=False)
    op.rename_table('pemasok', 'pemasuk')
